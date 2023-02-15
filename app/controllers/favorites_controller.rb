class FavoritesController < ApplicationController
  before_action :set_favorite, only: %i[ show update destroy ]

  # GET /favorites
  def index
    favorites = Favorite.all
    render json: favorites, status: :ok
  end

  # GET /cities/1
  def show
    favorite = Favorite.find(params[:favorite_id])
    render json: favorite, status: :ok
  end

  # POST /cities
  def create
    favorite = Favorite.create!(favorite_params)
    render json: favorite, status: :created, location: favorite
  end

  # PATCH/PUT /cities/1
  def update
    favorite.update!(favorite_params)
    render json: favorite, status: :accepted
  end

  # DELETE /cities/1
  # def delete_fav
  #   debugger
  #   favorite = Favorite.find(params[:favorite_id])
  #   favorite.destroy
  #   head :no_content
  # end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.require(:favorite).permit(:player_id, :criminal_id)
    end
end
