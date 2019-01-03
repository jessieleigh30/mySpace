# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :follow_friends, Array

  def self.random_friends(ids)
    ids = ids.empty? ? [0]: ids
    Friend.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.follow(ids)
    ids= ids.empty? ? [0]: ids
    Friend.where("id IN (?)", ids)
  end
end
