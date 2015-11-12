Rails.application.routes.draw do
  root to: 'notes#index' 
  resources :notes, except: [:show] do
    get :autocomplete_note_category, :on => :collection
  end
end
