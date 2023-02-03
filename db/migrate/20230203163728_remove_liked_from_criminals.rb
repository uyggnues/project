class RemoveLikedFromCriminals < ActiveRecord::Migration[7.0]
  def change
    remove_column :criminals, :liked
  end
end
