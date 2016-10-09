require 'capybara'
require 'capybara/rspec'
require 'capybara/poltergeist'

RSpec.configure do |config|
  # Capybaraを有効にする
  config.include Capybara::DSL
end

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(
    app,
    # SSLエラーを無視する
    phantomjs_options: ['--ignore-ssl-errors=yes'],
    js_errors: false,
    debug: false,
    :timeout => 300
  )
end

# ブラウザなしにJavaScriptを実行する環境はpoltergeistを使う
Capybara.javascript_driver = :poltergeist

Capybara.configure do |config|
  config.run_server = false
  config.default_driver = :poltergeist
  config.app_host = 'http://search.yahoo.co.jp/'
end
