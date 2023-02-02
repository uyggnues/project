class City < ApplicationRecord
    has_many :criminals
    has_many :civilians

    validates :name, presence: true, uniqueness: true
    validates :population, presence: true
    validates :image, presence: true
end
