class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_error
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
    

    private
    def invalid_error(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def not_found_error(invalid)
        render json: {error:  "#{invalid.model} Not Found"}, status: :not_found
    end
end
