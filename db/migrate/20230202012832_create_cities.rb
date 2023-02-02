class CreateCities < ActiveRecord::Migration[7.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.decimal :population
      t.string :image

      t.timestamps
    end
  end
end
