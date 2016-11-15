class CreateTellings < ActiveRecord::Migration[5.0]
  def change
    create_table :tellings do |t|
      t.string :title
      t.string :description
      t.references :story, foreign_key: true

      t.timestamps
    end
  end
end
