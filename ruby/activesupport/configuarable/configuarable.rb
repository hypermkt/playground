require 'active_support/configurable'

class MyClass
  class Config
    include ActiveSupport::Configurable
    config_accessor :foo

    config_accessor :bar do
      "hoge"
    end
  end

  attr_accessor :foo, :bar

  def initialize
    @foo = MyClass::Config.foo
    @bar = MyClass::Config.bar
  end
end

client = MyClass.new
p client
client.tap do |config|
  config.foo = 'wow'
end
p client

