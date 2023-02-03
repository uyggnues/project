class Player < ApplicationRecord
    has_many :favorites
    # has_many :criminals, through: :favorites
    has_many :fav_criminals, through: :favorites, source: :criminal

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, length: {in: 6..20}, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {in: 6..20}
    validates :roles, presence: true, inclusion: {in: %w(admin player), message: 'Please Select a role'}
end
