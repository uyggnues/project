class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :population

  has_many :civilians
  has_many :criminals
end
