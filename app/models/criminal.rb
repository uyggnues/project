class Criminal < ApplicationRecord
  belongs_to :city
  has_many :favorites
  has_many :players, through: :favorites

  validates :name, presence: true
  validates :age, presence: true
  validates :address, presence: true, uniqueness: true
  validates :birthday, presence: true
  validates :height, presence: true
  validates :weight, presence: true
  validates :image, presence: true
  validates :sentenced, presence: true
  # validates :in_jail, presence: true
  # validates :liked, presence: true
end
