Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'

  root "frontend#index"

  # React Router needs a wildcard
  get "/*all", to: "frontend#index"

  resources :comments
  mount ActionCable.server => "/cable"
end
