require 'redis'

# Redisに接続
REDIS = Redis.new(host: 'localhost', port: 6379)

# 初期化
REDIS.del("ranking")

# 検証データを登録
REDIS.zadd("ranking", 200, "A")
REDIS.zadd("ranking", 150, "B")
REDIS.zadd("ranking", 30, "C")
REDIS.zadd("ranking", 200, "D")
REDIS.zadd("ranking", 180, "E")
REDIS.zadd("ranking", 190, "F")
REDIS.zadd("ranking", 250, "G")
REDIS.zadd("ranking", 210, "H")
REDIS.zadd("ranking", 10, "I")
REDIS.zadd("ranking", 30, "J")

# 降順のランキング情報を1件目から10件スコア情報も合わせて取得する
# https://www.rubydoc.info/github/redis/redis-rb/Redis:zrangebyscore
rankings = REDIS.zrevrange("ranking", 0, 10, :with_scores => true)
rankings.each do |r|
  # https://www.rubydoc.info/github/redis/redis-rb/Redis#zcount-instance_method
  # 同点順位計算処理: 同じスコア以上のものが何件あるか算出する
  rank = REDIS.zcount("ranking", r[1], "+inf")
  p r
  p rank
end
