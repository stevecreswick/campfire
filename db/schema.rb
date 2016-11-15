# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161115172315) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "stories", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_stories_on_user_id", using: :btree
  end

  create_table "story_blocks", force: :cascade do |t|
    t.integer  "text_block_id"
    t.integer  "character_id"
    t.integer  "resolution_id"
    t.integer  "parent_event_id"
    t.string   "type_name"
    t.integer  "postion"
    t.integer  "telling_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["telling_id"], name: "index_story_blocks_on_telling_id", using: :btree
  end

  create_table "tellings", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "story_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["story_id"], name: "index_tellings_on_story_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "about"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "stories", "users"
  add_foreign_key "story_blocks", "tellings"
  add_foreign_key "tellings", "stories"
end
