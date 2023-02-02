class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :player, null: false, foreign_key: true
      t.references :criminal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
