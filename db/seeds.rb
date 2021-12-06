# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


cities = ['lahore','rawalpindi','islamabad','karachi','peshawar','faisalabad','multan','quetta','Gujranwala']
cities.each do |name|
  Location.create(city_name: name)
end
User.create(email: 'superadmin@store.com', first_name: 'Super', last_name: 'Admin', phone_number: '0213123131', approval: true, password: 'superadmin',password_confirmation: 'superadmin', role: '2')
