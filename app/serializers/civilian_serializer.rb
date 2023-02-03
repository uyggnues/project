class CivilianSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :address, :birthday, :height, :weight, :image

  belongs_to :city
end
