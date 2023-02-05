class City < ApplicationRecord
    has_many :criminals
    has_many :civilians, dependent: :destroy

    validates :name, presence: true
    validates :population, presence: true
end
