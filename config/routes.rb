Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :quotes, only: [:show]
  end
  get "/*path", to: "pages#index", as: :app

  root "pages#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
