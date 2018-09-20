# Rails.application.routes.draw do
#   mount_devise_token_auth_for 'User', at: 'api/auth'

#   namespace :api do
#     resources :people, only: [:index, :show, :update]  
#     get 'my_friends', to: 'friends#my_friends'
#   end

#   #Do not place any routes below this one
#   if Rails.env.production?
#     get '*other', to: 'static#index'
#   end
# end

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :people, only: [:index, :update]
    # get 'my_cats', to: 'cats#my_cats'
  end

  #Do not place any routes below this one
  if Rails.env.production?
    get '*other', to: 'static#index'
  end
end