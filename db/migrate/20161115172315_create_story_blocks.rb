class CreateStoryBlocks < ActiveRecord::Migration[5.0]
  def change
    create_table :story_blocks do |t|
      t.integer :text_block_id
      t.integer :character_id
      t.integer :resolution_id
      t.integer :parent_event_id
      t.string :type_name
      t.integer :postion
      t.references :telling, foreign_key: true

      t.timestamps
    end
  end
end
