class ChangeColumnToNotes < ActiveRecord::Migration
  def change
    rename_column :notes, :category, :category_id
    change_column :notes, :category_id, 'integer USING CAST(category_id AS integer)'
  end
end
