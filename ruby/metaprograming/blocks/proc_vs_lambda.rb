def double(callable_object)
  callable_object.call * 2
end

l = lambda { return 20 }

puts double(l)

def another_double
  p = Proc.new { return 10 }
  result = p.call
  return result * 2 # ここまえ来ない！
end

puts another_double


def double(callable_object)
  callable_object.call * 2
end

p = Proc.new { return 10 }
double(p)
