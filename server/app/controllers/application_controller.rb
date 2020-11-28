class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
  def frontend_index_html
    render file: 'public/index.html'
  end
end
