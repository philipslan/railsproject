class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  def index
  end

  def store
  end

  def contact
    @contact = Contact.new
  end
  
  protect_from_forgery with: :exception
end
