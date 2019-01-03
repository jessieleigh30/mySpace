class AddFollowFriendsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :follow_friends, :text
  end
end
