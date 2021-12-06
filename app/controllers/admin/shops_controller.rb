class Admin::ShopsController < ApplicationController
  before_action :find_shop, except: [:new, :index, :create]
  
  def index
    @shop = Shop.all
  end
  
  def new
    @shop = Shop.new
  end
  
  def create
    @shop = Shop.new(shop_params)
    if @shop.save
      redirect_to admin_shops_path
      flash[:success] = "New Shop Successfully Created."
    else
      render :new
      flash[:error] = "Something Went Wrong"
    end
  end
  
  def edit
  
  end
  
  def update
    if @shop.update(shop_params)
      redirect_to admin_shops_path
      flash[:success] = "Shop Successfully updated."
    else
      render :edit
      flash[:error] = "Something Went Wrong."
    end
  end
  
  def destroy
    if @shop.destroy
      flash[:success] = 'Shop successfully deleted.'
    else
      redirect_to admin_shops_path
      flash[:error] = "Something went wrong."
    end
  end
  
  private
  
  def find_shop
    @shop = Shop.find(params[:id])
  end
  
  def shop_params
    params.require(:shop).permit(:shop_name, :user_id, :shop_number, :location_id)
  end
end
