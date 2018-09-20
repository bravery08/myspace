200.times do
  name = Faker::HarryPotter.character
  location = Faker::HarryPotter.location
  email = Faker::Internet.email
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set4')
  Person.create(name: name, location: location, email: email, avatar: avatar)
 end