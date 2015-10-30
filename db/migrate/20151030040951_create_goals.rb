class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string :title
      t.string :category
      t.text :content
      t.string :url
      t.datetime :goal_date 
      
      t.timestamps null: false
    end
  end
end
