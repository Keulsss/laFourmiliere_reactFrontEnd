class Event < ApplicationRecord
  belongs_to :category
  has_many :attendances
  has_many :users, through: :attendances
  validates :title, presence: true
  validates :duration, presence: true
  validates :start_time, presence: true
  validates :tagline, presence: true
  validates :description, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :zip_code, presence: true
  has_one_attached :event_picture
end
