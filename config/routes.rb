Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'cities#home'

  get '*path', to: 'cities#home'
  # resources :cities
end
