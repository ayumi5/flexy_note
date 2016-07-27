source 'https://rubygems.org'

gem 'rails', '4.2.1'

# persistance
gem 'pg'

#asset pipeline
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'twitter-bootstrap-rails', :git => 'git://github.com/seyhunak/twitter-bootstrap-rails.git'
gem 'bootstrap-datepicker-rails', :git => 'git://github.com/Nerian/bootstrap-datepicker-rails.git'
gem 'font-awesome-sass', '~> 4.4.0'
gem 'haml-rails'
gem 'react-bootstrap-rails'

source 'https://rails-assets.org' do
  gem 'rails-assets-typeahead.js'
end

#frontend
gem 'react-rails', '~> 1.4.0'
gem 'rails-html-sanitizer'

#form
gem 'simple_form'
gem 'rails4-autocomplete'

#search engine
gem 'elasticsearch', '1.0.8'
# gem 'elasticsearch-rails'
# gem 'elasticsearch-model'
gem 'chewy', '~> 0.8.0'
gem 'acts-as-taggable-on', '~> 3.4'

#security
# gem 'bcrypt', '~> 3.1.7'

#deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'rspec-rails'
  gem 'factory_girl_rails', '~>4.0'
  gem 'capybara'
  gem 'selenium-webdriver'
  gem "capybara-webkit", require: false
  gem 'byebug'
  gem 'web-console', '~> 2.0'
  gem 'spring', '~> 1.4.0'
  gem "erb2haml"
  gem 'pry-rails'
  gem 'pry-byebug'
  gem "better_errors"
end

group :test do
  gem 'database_cleaner', require: false
  gem 'launchy'
  gem 'elasticsearch-extensions'
end
