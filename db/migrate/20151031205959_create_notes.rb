class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title
      t.string :category
      t.text :content
      t.string :url

      t.timestamps null: false
    end
  end
end
