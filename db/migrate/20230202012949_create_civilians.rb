class CreateCivilians < ActiveRecord::Migration[7.0]
  def change
    create_table :civilians do |t|
      t.string :name
      t.integer :age
      t.string :address
      t.string :birthday
      t.decimal :height
      t.integer :weight
      t.string :image
      t.references :city, null: false, foreign_key: true

      t.timestamps
    end
  end
end
