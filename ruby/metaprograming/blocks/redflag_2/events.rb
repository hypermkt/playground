def monthly_sales
  110 # TODO: 実際のデータはデータベースから読み取る
end

target_sales = 100

event "月額売上が驚くほど高い" do
  monthly_sales > target_sales
end

event "月額売上が底なしに低い" do
  monthly_sales < target_sales
end
