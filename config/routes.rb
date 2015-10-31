Rails.application.routes.draw do
  root to: 'goals#index' 
  resources :goals do
    get :autocomplete_goal_category, :on => :collection
  end
end
