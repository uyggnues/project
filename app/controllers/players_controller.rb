class PlayersController < ApplicationController
  before_action :set_player, only: %i[ show update destroy ]

  # GET /players
  def index
    players = Player.all
    render json: players, status: :ok
  end

  # GET /cities/1
  def show
    player = Player.find(params[:id])
    render json: player, status: :ok
  end

  # POST /cities
  def create
    player = Player.create!(player_params)
    render json: player, status: :created, location: player
  end

  # PATCH/PUT /cities/1
  def update
    player.update!(player_params)
    render json: player, status: :accepted
  end

  # DELETE /cities/1
  def destroy
    player = Player.find(params[:player_id])
    player.destroy
    head :no_content
  end

  def signup
    user = Player.create(player_params)
    if user.id
      session
      render json: user, status: :created
    else
      render json: {message: user.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      player = Player.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def player_params
      params.permit(:first_name, :last_name, :username, :email, :password, :roles)
    end
end
