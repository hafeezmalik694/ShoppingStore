class User < ApplicationRecord
  # Include default users modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates_uniqueness_of :phone_number
  belongs_to :location, optional: true
  has_one :shop
  enum role: {
          'customer': '0',
          'vendor': '1',
          'super_admin': '2'
  }
end
