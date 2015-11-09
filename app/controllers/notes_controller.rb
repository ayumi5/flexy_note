class NotesController < ApplicationController
  autocomplete :note, :category
  def show
    @note = Note.find(params[:id])
  end
  
  def index
    if search_params?
      @search = NotesSearch.new(params[:note])
      @notes = { notes: @search.search.only(:id).load }
    else
      @notes = { notes: Note.all }
    end

    respond_to do |format|
      format.html
      format.json { render json: @notes[:notes] }
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
    destroy = Note.find(params[:id]).destroy!
    if search_params?
      @search = NotesSearch.new(params[:note])
      @notes = { notes: @search.search.only(:id).load }
    else
      @notes = { notes: Note.all }
    end

    respond_to do |format|
      format.html { redirect_to notes_path }
      format.json { render json: @notes[:notes] }
    end
  end

  private
  
  def search_params?
    if params[:note]
      values_exist = params[:note].values.map(&:present?)
      values_exist.uniq.first
    end
  end
  
  def note_params
    params.require(:note).permit(:title, :category, :content, :url, :tag_list)
  end
end
