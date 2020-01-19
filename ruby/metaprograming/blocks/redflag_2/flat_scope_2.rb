my_var = "成功"

MyClass = Class.new do
  # my_var をここに表示したい...
  puts "クラス定義の中は #{my_var}"

  define_method :my_method do
    "my_method 定義の中は #{my_var}"
  end
end

puts MyClass.new.my_method
