Rails.application.routes.draw do

  get "admin/:id", to: "users#admin_home", as: "admin_home"
  get "admin/:id/users", to: "users#admin_users", as: "admin_users"
  get "admin/:id/products", to: "user#admin_products", as: "admin_products"
  get "admin/:id/users/:id/products", to: "users#admin_user_product", as: "admin_user_product"

  resources :users do
    resources :products
  end
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'
end
