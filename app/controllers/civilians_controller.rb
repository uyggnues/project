class CiviliansController < ApplicationController
  before_action :set_civilian, only: %i[ show update destroy ]

  # GET /civilians
  def index
    civilians = Civilian.all
    render json: civilians, status: :ok
  end
  
  # GET /cities/1
  def show
    civilian = Civilian.find(params[:civilian_id])
    render json: civilian, status: :ok
  end

  # POST /cities
  def create
    civilian = Civilian.create!(civilian_params)
    render json: civilian, status: :created, location: civilian
  end

  # PATCH/PUT /cities/1
  def update
    civilian.update!(civilian_params)
    render json: civilian, status: :accepted
  end

  # DELETE /cities/1
  def destroy
    civilian = Civilian.find(params[:civilian_id])
    civilian.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_civilian
      civilian = Civilian.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def civilian_params
      params.require(:civilian).permit(:name, :age, :address, :birthday, :height, :weight, :image, :city_id)
    end
end
