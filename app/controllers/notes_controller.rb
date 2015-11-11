class NotesController < ApplicationController
  autocomplete :note, :category
  before_action :find_note_by_id, only: [:show, :destroy]

  def index
    @notes = get_search_result
    
    respond_to do |format|
      format.html
      format.json { render json: @notes }
    end
  end
  
  def create
    @notes = Note.create(note_params)
    if @notes.save
      redirect_to @notes, notice: 'The note has been successfully created.'
    else
      render 'new'
    end
  end
  
  def new
    @note = Note.new
  end
  
  def edit
    @note = Note.new
  end
  
  def destroy
    @note.destroy!
    @notes = get_search_result
    respond_to do |format|
      format.html { redirect_to notes_path }
      format.json { render json: @notes }
    end
  end

  private
  
  def search_params_exist?
    if params[:note]
      values_exist = params[:note].values.map(&:present?)
      values_exist.uniq.include? true
    end
  end
  
  def find_note_by_id
    @note = Note.find(params[:id])
  end
  
  def note_params
    params.require(:note).permit(:title, :category, :content, :url, :tag_list)
  end
  
  def get_search_result
    if search_params_exist?
      @search = NotesSearch.new(params[:note])
      @search.search.only(:id).load
    else
      Note.all
    end
  end
end
