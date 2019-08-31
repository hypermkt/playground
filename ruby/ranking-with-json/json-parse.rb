require 'json'

json = JSON.parse(STDIN.read, symbolize_names: true)
# https://ref.xaio.jp/ruby/classes/array/slice
p json.slice(0, 3)
