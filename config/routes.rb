Rails.application.routes.draw do
  resources :cities
  resources :criminals
  resources :players
  resources :favorites
  resources :civilians
  
  get '/cities/:city_id/criminals', to:'cities#criminals'
  post '/cities/:city_id/criminals', to:'cities#new_criminals'
  # patch '/criminals/:criminal_id', to:'criminals#update_criminal'
  # delete '/criminals/:criminal_id', to:'criminals#delete_criminal'
end
