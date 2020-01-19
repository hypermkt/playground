def math(a, b)
	yield(a, b)
end

def do_math(a, b, &operation)
  puts operation
	math(a, b, &operation)
end

puts do_math(2, 3) {|x, y| x * y } # => 6
