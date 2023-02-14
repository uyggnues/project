class PlayersController < ApplicationController
  before_action :set_player, only: %i[ update destroy ]
  skip_before_action :authorized_user, only: [:signup]

  # GET /players
  def index
    players = Player.all
    render json: players, status: :ok
  end

  # GET /cities/1
  def show
    render json: @user, status: :ok
  end

  # POST /cities
  # def create
  #   player = Player.create!(player_params)
  #   render json: player, status: :created, location: player
  # end

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
    debugger
    if user.id
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {message: user.errors.full_messages}, status: :unprocessable_entity
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
