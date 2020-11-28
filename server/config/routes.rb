Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "auth"

  namespace :api do
    namespace :v1 do
      get "events/index"
      post "events/create"
      get "/events/:id", to: "events#show"
      delete "/destroy/:id", to: "events#destroy"
      get "categories/index"
      resources :users
    end
  end

  get "*path", to: "application#frontend_index_html", constraints: lambda { |request|
             !request.xhr? && request.format.html?
           }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
