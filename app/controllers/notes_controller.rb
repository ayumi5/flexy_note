class NotesController < ApplicationController
  autocomplete :note, :category
  def show
    @note = Note.find(params[:id])
  end
  
  def index
    @notes = Note.all
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
    Note.find(params[:id]).destroy!
  end

  private
  
  def note_params
    params.require(:note).permit(:title, :category, :content, :url)
  end
end
