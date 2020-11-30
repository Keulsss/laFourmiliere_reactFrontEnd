class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show]
  #before_action :authenticate_user!, except: [:send_new_password]

  def show
    if @user
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
