Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      get "events/index"
      post "events/create"
      get "/events/:id", to: "events#show"
      delete "/destroy/:id", to: "events#destroy"
      get "categories/index"
    end
  end

  get "*path", to: "application#frontend_index_html", constraints: lambda { |request|
             !request.xhr? && request.format.html?
           }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
