50.times do
  name = Faker::Name.name
  age = Faker::Number.between(18, 70)
  location = Faker::Address.city
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set2')
  Friend.create(name: name, age: age, location: location, avatar: avatar)
end

puts "50 Friends Seeded"
