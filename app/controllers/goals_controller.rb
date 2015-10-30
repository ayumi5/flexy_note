class GoalsController < ApplicationController
  def show
    @goal = Goal.find(params[:id])
  end
  
  def index
    @goals = Goal.all
  end
  
  def create
    @goals = Goal.create(goal_params)
    if @goals.save
      redirect_to @goals, notice: 'The goal has been successfully created.'
    else
      render 'new'
    end
  end
  
  def new
    @goal = Goal.new
  end
  
  def edit
    @goal = Goal.new
  end
  
  def destroy
    Goal.find(params[:id]).destroy!
  end

  private
  
  def goal_params
    params.require(:goal).permit(:title, :category, :content, :url)
  end
end
