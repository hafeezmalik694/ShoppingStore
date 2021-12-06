Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
  devise_for :users, controllers: {
          sessions: 'users/sessions',
          registrations: 'users/registrations'
  }
  
  namespace 'admin' do
    resources :shops
    resources :users
    resources :locations
  end
  
  resources :shops, only: [:index, :show]
  resources :locations, only: [:show]
end
