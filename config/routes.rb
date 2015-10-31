Rails.application.routes.draw do
  root to: 'notes#index' 
  resources :notes
end
