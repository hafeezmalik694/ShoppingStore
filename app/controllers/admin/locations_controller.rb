class Admin::LocationsController < ApplicationController
  before_action :find_location, only:[:show, :edit, :update, :destroy]
  def index
    @locations = Location.all
  end
  
  def new
    @location = Location.new
  end
  def create
    @location = Location.new(location_params)
    if @location.save
      redirect_to admin_locations_path
      flash[:notice] = "Location successfully created."
    else
      render :new
    end
  end
  
  def edit
  
  end
  
  def update
    if @location.update(location_params)
      redirect_to admin_locations_path
      flash[:success] = "Location successfully updated."
    else
      render :edit
      flash[:error] = "Something Went Wrong."
    end
  end
  def destroy
    if @location.destroy
      flash[:success] = "Location successfully deleted."
    else
      flash[:error] = "Something Went Wrong."
      red
    end
  end
  
  private
  
  def find_location
    @location = Location.find(params[:id])
  end
  
  def location_params
    params.require(:location).permit(:city_name)
  end
end