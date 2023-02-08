class CriminalsController < ApplicationController
  before_action :set_criminal, only: %i[ show update destroy ]

  def index
    criminals = Criminal.all
    render json: criminals, status: :ok
  end
  # GET /cities/1
  def show
    @criminal = Criminal.find(params[:criminal_id])
    render json: @criminal, status: :ok
  end

  # POST /cities
  def create
    @criminal = Criminal.create!(criminal_params)
    render json: @criminal, status: :created, location: criminal
  end

  # PATCH/PUT /cities/1
  def update
    updated_criminal = @criminal.update!(criminal_params)
    render json: updated_criminal, status: :accepted
  end

  def destroy
    @criminal.destroy
    head :no_content
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_criminal
      @criminal = Criminal.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def criminal_params
      params.require(:criminal).permit(:name, :age, :address, :birthday, :height, :weight, :image, :sentenced, :in_jail, :liked, :city_id)
    end
end
