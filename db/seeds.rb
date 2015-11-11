# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create({name: 'test'})

for i in 1..10 do
  Note.create({ title: "test#{i}", category: Category.first.id, content: "this is test #{i}" })
end
