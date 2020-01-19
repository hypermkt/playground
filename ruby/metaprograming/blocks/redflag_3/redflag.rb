def setup(&block)
  @setups << block
end

def event(description, &block)
  @events << {description => description, condition: block}
end

@setups = []
@events = []
load 'events.rb'

@events.each do |event|
  @setups.each do |setup|
    setup.call
  end
  puts "ALERT: #{event[:descrption]}" if event[:condition].call
end
