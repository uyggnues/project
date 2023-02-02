class Civilian < ApplicationRecord
  belongs_to :city

  validates :name, presence: true
  validates :age, presence: true
  validates :address, presence: true, uniqueness: true
  validates :birthday, presence: true
  validates :height, presence: true
  validates :weight, presence: true
  validates :image, presence: true
end
