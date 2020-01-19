class MyClass
  def initialize
    @v = 1
  end
end

obj = MyClass.new

# instance_eval に渡したブロックは、レシーバをselfにしてから評価される。レシーバーのprivateメソッドや@vなどのインスタンス変数にアクセスができる
# BasicObject#instance_eval
obj.instance_eval do 
  puts self
  puts @v
end

v = 2
obj.instance_eval { @v = v }
obj.instance_eval { puts @v }
