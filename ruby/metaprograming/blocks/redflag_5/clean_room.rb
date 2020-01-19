class CleanRoom
  def current_temperature
    # ...
  end
end

clean_room = CleanRoom.new
clean_room.instance_eval do 
  if current_temperature < 20
    # TODO: ジャケットを着る
  end
end
