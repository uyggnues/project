class CitiesController < ApplicationController
  before_action :set_city, only: %i[ show update destroy ]
  # skip_before_action :authorized_user, only: [:login]

  # GET /cities
  def index
    cities = City.all
    render json: cities, status: :ok
  end

  def criminals
    # debugger
    city = City.find(params[:city_id])
    render json: city.criminals, status: :ok
  end

  # GET /cities/1
  def show
    city = City.find(params[:city_id])
    render json: city, status: :ok
  end

  def new_criminals
    city = City.find(params[:city_id])
    # debugger
    new_city = Criminal.create!(criminal_params)
    render json: new_city, status: :created
  end

  def civilians
    city = City.find(params[:city_id])
    criminals = city.criminals.filter{ |c| !c.in_jail}
    render json: {civilians: city.civilians, criminals: criminals}, status: :ok
  end

  def delete
    city = City.find(params[:city_id])
    criminal = city.criminals.find(params[:id])
    criminal.delete
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

    def criminal_params
      params.permit(:name, :age, :address, :birthday, :height, :weight, :image, :sentenced, :in_jail, :city_id)
    end

end
