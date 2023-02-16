Rails.application.routes.draw do
  resources :cities
  resources :criminals
  resources :players
  resources :favorites
  resources :civilians
  
  get '/cities/:city_id/criminals', to:'cities#criminals'
  get '/cities/:city_id/civilians', to:'cities#civilians'
  post '/cities/:city_id/criminals', to:'cities#new_criminals'
  post '/login', to:'sessions#login'
  delete '/logout', to:'sessions#logout'
  post '/signup', to:'players#signup'
  get '/me', to: 'sessions#me'
  get '/authorized_user', to: 'players#show'
  delete '/players/:player_id/favorites/:id', to: 'favorites#delete_fav'

  # namespace :api do
  #   namespace :v1 do

  #   end
  # end
end
