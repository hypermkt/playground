p = Proc.new {|a, b| [a, b]}
p p.call(1, 2)
p p.call(1)

p = lambda {|a, b| [a, b] }
p p.call(1, 2)
p p.call(1)
