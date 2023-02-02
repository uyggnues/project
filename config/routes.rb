Rails.application.routes.draw do
  resources :cities
  resources :criminals
  resources :players
  resources :favorites
  resources :civilians
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
