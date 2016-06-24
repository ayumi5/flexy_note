class NotesController < ApplicationController
  include NotesHelper
  autocomplete :note, :category
  before_action :find_note_by_id, only: [:destroy, :edit, :update]

  def index
    @notes = get_scoped_notes
    respond_to do |format|
      format.html
      format.json { render json: {notes: convert_notes_to_json(@notes), categories: convert_categories_to_json(Category.all)} }
    end
  end
  
  def create
    @note = Note.create(note_params)
    @note.save
    respond_to do |format|
      format.html { redirect_to notes_path }
      format.json { render json: {notes: convert_notes_to_json(Note.all)} }
    end
  end
  
  def new
    @note = Note.new
  end
  
  def update
    @note.update_attributes!(note_params)
    respond_to do |format|
      format.html { redirect_to notes_path }
      format.json { render json: {notes: convert_notes_to_json(Note.all)} }
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
      params[:note][:category] = nil if params[:note][:category] == 'All'
      values_exist = params[:note].values.map(&:present?)
      values_exist.uniq.include? true
    end
  end
  
  def find_note_by_id
    @note = Note.find(params[:id])
  end
  
  def seach_for_category
    @caregory_name = params[:note][:category] if params[:note][:category]
    params[:note][:category_id] = Category.find_or_create_by({name: @caregory_name}).id
  end
  
  def note_params
    seach_for_category
    params.require(:note).permit(:title, :category_id, :content, :url, :tag_list)
  end
  
  def get_scoped_notes
    if search_params_exist?
      @search = NotesSearch.new(params[:note])
      @search.search.only(:id).load.limit(50)
    else
      Note.all.order({updated_at: :desc}).limit(50)
    end
  end
end
