class FavoriteSerializer < ActiveModel::Serializer
  belongs_to :player
  belongs_to :criminal
end
