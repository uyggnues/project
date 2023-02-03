class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_error
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_error
    

    private
    def invalid_error(invalid)
        render json: {errors: invalid.record.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end

    def not_found_error
        render json: {errors: 'Not Found'}, status: :not_found
    end
end
