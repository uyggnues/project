class City < ApplicationRecord
    has_many :criminals
    has_many :civilians

    validates :name, presence: true
    validates :population, presence: true
end
