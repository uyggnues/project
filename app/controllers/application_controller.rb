class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_error
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

    # configure do 
    #     set :public_folder, 'public'
    #     set :default_content_type, :json
    #     enable :sessions
    #     set :session_secret. ENV["SESSION_SECRET"]
    # end
    

    private
    def invalid_error(invalid)
        render json: {errors: invalid.record.errors.full_message}, status: :unprocessable_entity
    end

    def not_found_error(invalid)
        render json: {error:  "#{invalid.model} Not Found"}, status: :not_found
    end
end
