class Favorite < ApplicationRecord
  belongs_to :player
  belongs_to :criminal
end
