class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name,:username, :email, :password

  has_many :favorites
  has_many :fav_criminals
end
