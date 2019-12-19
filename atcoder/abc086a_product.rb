a, b = gets.split.map(&:to_i)
r = a * b
print r.even? ? 'Even' : 'Odd'
