class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def index
    @events = Event.all.order(start_time: :asc)
    render :json => @events.with_attached_event_picture
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      @event.event_picture.attach(params.dig(:event, :event_picture))
      render json: event
    else
      render json: { alert: event.errors.full_messages }
    end
  end

  def update
    if params[:event][:event_picture]
      event.event_picture.purge
      event.event_picture.attach(params[:event][:event_picture])
    end

    if @event.update(event_params)
      render json: @event
    else
      render json: { alert: @event.errors.full_messages }
    end
  end

  def show
    if @event
      render json: @event
    else
      render json: { alert: @event.errors.full_messages }
    end
  end

  def destroy
    @event&.destroy
    render json: { notice: "Event deleted!" }
  end

  private

  def set_event
    @event ||= Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:duration, :start_time, :name, :tagline, :description, :address, :zip_code, :city, :category_id, :max_attendees)
  end
end
