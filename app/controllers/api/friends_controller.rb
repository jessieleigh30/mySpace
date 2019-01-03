class Api::FriendsController < ApplicationController
  before_action :authenticate_user!


  def index
    render json: User.random_friends(current_user.follow_friends)
  end

  def update
    current_user.follow_friends << params[:id].to_i
    current_user.save
  end

  def my_friends
    render json: User.follow(current_user.follow_friends)
  end
end
