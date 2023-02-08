puts 'destroying seeds'
Player.destroy_all
City.destroy_all
Civilian.destroy_all
Criminal.destroy_all

puts 'seeding players'
Player.create(first_name: 'seunggyu', last_name: 'lee', username: 'uyggnues', email: 'example@example.com', password:"password", roles: 'admin')

puts 'seeding cities'
6.times do
    City.create(name: Faker::Name.name, population: Faker::Number.between(from:200000, to:3000000))
end

puts 'seeding civilians'
1000.times do
    c = City.all.sample
    Civilian.create(name: Faker::Name.name, age: Faker::Number.between(from: 15, to: 65), address: Faker::Address.street_address, birthday: Faker::Date.birthday, height: Faker::Number.between(from: 5.0, to: 7.0), weight: Faker::Number.between(from: 100, to: 250), image: Faker::LoremFlickr.image, city: c )
end

puts 'seeding criminals'
250.times do
    c = City.all.sample
    Criminal.create(name: Faker::Name.name, age: Faker::Number.between(from: 15, to: 65), address: Faker::Address.street_address, birthday: Faker::Date.birthday, height: Faker::Number.between(from: 5.0, to: 7.0), weight: Faker::Number.between(from: 100, to: 250), image: Faker::LoremFlickr.image, sentenced: Faker::Number.between(from: 1, to: 100), in_jail: Faker::Boolean.boolean, city: c )
end

puts 'seeding complete'