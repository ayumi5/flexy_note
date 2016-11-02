class NotesController < ApplicationController
  include NotesHelper
  include DateHelper
  include Pagination
  
  autocomplete :note, :category
  before_action :find_note, only: [:destroy, :edit, :update]

  def index
    @offset = page_offset(params[:page])
    @result = Note.search_by_query(query, @offset)
    @page_num = page_number(@result[:count])  
    respond_to do |format|
      format.html
      format.json { render json: {notes: convert_notes_to_json(@result[:notes]), categories: convert_categories_to_json(Category.all), pageNum: @page_num } }
    end
  end
  
  def create
    @note = Note.create(note_params)
    @note.save
    respond_to do |format|
      format.html { redirect_to notes_path }
      format.json { render json: {notes: convert_notes_to_json(Note.list.limited)} }
    end
  end
  
  def new
    @note = Note.new
  end
  
  def update
    @note.update_attributes!(note_params)
    respond_to do |format|
      format.html { redirect_to notes_path }
      format.json { render json: {notes: convert_notes_to_json(Note.list.limited)} }
    end
  end
  
  def destroy
    @note.destroy!
    @notes = get_scoped_notes
    respond_to do |format|
      format.html { redirect_to notes_path }
      format.json { render json: {notes: convert_notes_to_json(@notes)} }
    end
  end

  private
  
  def search_params_exist?
    if params[:note]
      values_exist = params[:note].map do |key, val|
        if key == "category"
          val != 'All'
        else
          val.present?
        end
      end
      values_exist.uniq.include? true
    end
  end
  
  def find_note
    @note = Note.find(params[:id])
  end
  
  def seach_for_category
    params[:note][:category_id] = Category.find_or_create_by({name: params[:note][:category]}).id
  end
  
  def note_params
    seach_for_category
    params.require(:note).permit(:title, :category_id, :content, :url, :tag_list)
  end
  
  def query
    return nil unless search_params_exist?
    { 
      query: params[:note][:query],
      category: params[:note][:category],
      min_date: format_date_str(params[:note][:min_date]),
      max_date: format_date_str(params[:note][:max_date])
    }
  end
  
end
