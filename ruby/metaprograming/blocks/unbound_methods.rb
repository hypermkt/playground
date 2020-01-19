module MyModule
  def my_method
    42
  end
end

unbound = MyModule.instance_method(:my_method)
unbound.class

String.send :define_method, :another_method, unbound 
puts "abc".another_method # => 42
