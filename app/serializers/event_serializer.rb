class EventSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :attendances, :category_id, :description, :city, :zip_code, :title, :start_time, :image

  def image
    return unless object.event_picture.attached?

    object.event_picture.blob.attributes
      .slice("filename", "byte_size")
      .merge(url: image_url)
      .tap { |attrs| attrs["name"] = attrs.delete("filename") }
  end

  def image_url
    url_for(object.event_picture)
  end

  def attendances
    object.attendances.count
  end
end
