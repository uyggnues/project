class CriminalSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :address, :birthday, :height, :weight, :image, :sentenced, :in_jail, :liked

  belongs_to :city
  has_many :favorites
end
