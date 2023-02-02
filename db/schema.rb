# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_02_015001) do
  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.decimal "population"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "civilians", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "address"
    t.string "birthday"
    t.decimal "height"
    t.integer "weight"
    t.string "image"
    t.integer "city_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_civilians_on_city_id"
  end

  create_table "criminals", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "address"
    t.string "birthday"
    t.decimal "height"
    t.integer "weight"
    t.string "image"
    t.integer "sentenced"
    t.boolean "in_jail"
    t.boolean "liked"
    t.integer "city_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_criminals_on_city_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "criminal_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["criminal_id"], name: "index_favorites_on_criminal_id"
    t.index ["player_id"], name: "index_favorites_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password"
    t.string "roles"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "civilians", "cities"
  add_foreign_key "criminals", "cities"
  add_foreign_key "favorites", "criminals"
  add_foreign_key "favorites", "players"
end
