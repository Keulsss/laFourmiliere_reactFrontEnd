Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "events/index"
      post "events/create"
      get "/events/:id", to: "events#show"
      delete "/destroy/:id", to: "events#destroy"
      get "categories/index"
      mount_devise_token_auth_for "User", at: "auth"
      resources :users
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
