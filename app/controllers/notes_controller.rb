class NotesController < ApplicationController
  def show
    @note = Note.find(params[:id])
  end
  
  def index
    @notes = Note.all
  end
  
  def create
    @note = Note.create(note_params)
    if @note.save
      redirect_to @note, notice: 'The note has been successfully created.'
    else
      render 'new'
    end
  end
  
  def new
    @note = Note.new
  end

  private
  
  def note_params
    params.require(:note).permit(:title, :category, :content, :url)
  end
end
