class Category < ApplicationRecord
  has_many :events
  validates :color, presence: true
  validates :name, :length => { :minimum => 3, :maximum => 30 }, presence: true
end
