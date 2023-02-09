class CivilianSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :address, :birthday, :height, :weight, :image, :city_id

end
