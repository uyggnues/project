class CiviliansController < ApplicationController
  before_action :set_civilian, only: %i[ show update destroy ]

  # GET /civilians
  def index
    @civilians = Civilian.all

    render json: @civilians
  end

  # GET /civilians/1
  def show
    render json: @civilian
  end

  # POST /civilians
  def create
    @civilian = Civilian.new(civilian_params)

    if @civilian.save
      render json: @civilian, status: :created, location: @civilian
    else
      render json: @civilian.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /civilians/1
  def update
    if @civilian.update(civilian_params)
      render json: @civilian
    else
      render json: @civilian.errors, status: :unprocessable_entity
    end
  end

  # DELETE /civilians/1
  def destroy
    @civilian.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_civilian
      @civilian = Civilian.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def civilian_params
      params.require(:civilian).permit(:name, :age, :address, :birthday, :height, :weight, :image, :city_id)
    end
end
