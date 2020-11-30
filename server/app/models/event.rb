class Event < ApplicationRecord
  belongs_to :category
  has_many :attendances
  has_many :users, through: :attendances
  validates :title, presence: true
  validates :duration, presence: true
  validates :start_time, presence: true
  validate :start_time_cannot_be_in_the_past
  validates :tagline, presence: true
  validates :description, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :zip_code, presence: true
  has_one_attached :event_picture

  private

  def start_time_cannot_be_in_the_past
    if start_time.present? && start_time < Time.now
      errors.add(:start_time, "can't be in the past")
    end
  end
end
