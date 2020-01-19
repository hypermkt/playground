def event(descrption)
  puts "ALERT: #{descrption}" if yield
end
load 'events.rb'
