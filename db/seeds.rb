puts 'destroying seeds'
Player.destroy_all
City.destroy_all
Civilian.destroy_all
Criminal.destroy_all

puts 'seeding players'
Player.create(first_name: 'seunggyu', last_name: 'lee', username: 'uyggnues', email: 'example@example.com', password:"password", roles: 'admin')

puts 'seeding cities'
    LA = City.create(name: 'Los Angeles', population: 384900),
    LV = City.create(name: 'Los Vegas', population: 646700),
    NYC = City.create(name: 'New York City', population: 735500),
    DB = City.create(name: 'Dubai', population: 742000),
    DC = City.create(name: 'Washington D.C', population: 964900),
    SF = City.create(name: 'San Francisco', population: 853400)

puts 'seeding civilians'
300.times do
    c = City.all.sample
    Civilian.create(name: Faker::Name.name, age: 35, address: Faker::Address.street_address, birthday: Faker::Date.birthday, height: Faker::Number.between(from: 5.0, to: 7.0), weight: Faker::Number.between(from: 100, to: 250), image: 'https://www.pinclipart.com/picdir/big/360-3601710_old-clipart-senior-citizen-old-couple-transparent-cartoon.png', city: c )
end

puts 'seeding criminals'
50.times do
    c = City.all.sample
    Criminal.create(name: Faker::Name.name, age: Faker::Number.between(from: 15, to: 65), address: Faker::Address.street_address, birthday: Faker::Date.birthday, height: Faker::Number.between(from: 5.0, to: 7.0), weight: Faker::Number.between(from: 100, to: 250), image: 'https://www.jing.fm/clipimg/detail/11-114938_criminal-clipart-masked-robber-social-engineering-hacking.png', sentenced: Faker::Number.between(from: 1, to: 100), in_jail: false, city: c )
end

50.times do
    c = City.all.sample
    Criminal.create(name: Faker::Name.name, age: Faker::Number.between(from: 15, to: 65), address: Faker::Address.street_address, birthday: Faker::Date.birthday, height: Faker::Number.between(from: 5.0, to: 7.0), weight: Faker::Number.between(from: 100, to: 250), image: 'https://www.netclipart.com/pp/m/263-2639293_jail-clipart-female-prisoner-cartoon-characters-in-prison.png', sentenced: Faker::Number.between(from: 1, to: 100), in_jail: true, city: c )
end

puts 'seeding complete'