class CitiesController < ApplicationController
  before_action :set_city, only: %i[ show update destroy ]

  # GET /cities
  def index
    cities = City.all
    render json: cities, status: :ok
  end

  def criminals
    city = City.find(params[:city_id])
    render json: city.criminals, status: :ok
  end

  # GET /cities/1
  def show
    city = City.find(params[:city_id])
    render json: city, status: :ok
  end

  # POST /cities
  def create
    city = City.create!(city_params)
    render json: city, status: :created, location: city
  end

  # PATCH/PUT /cities/1
  def update
    city.update!(city_params)
    render json: city, status: :accepted
  end

  # DELETE /cities/1
  def destroy
    city = City.find(params[:city_id])
    city.destroy
    head :no_content
  end

private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      city = City.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def city_params
      params.require(:city).permit(:name, :population)
    end

end
