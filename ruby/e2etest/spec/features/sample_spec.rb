require 'spec_helper'

describe 'Yahooの各ページが正常に閲覧できること確認する' do
	shared_examples_for 'correct response' do |uri|
		before { visit uri }

		it "#{uri}が200 OKで正常に閲覧できる" do
			expect(page.status_code).to be(200)
		end

		it "#{uri}にPHPの警告が無い" do
			expect(page).to have_no_content('Warning:')
		end

		it "#{uri}にPHPのエラーが無い" do
			expect(page).to have_no_content('Fatal error:')
		end
	end

  %w(
      /
    ).each do |p|
    it_behaves_like 'correct response', p
  end

  context '検索が出来る' do
    before do
      visit '/'

      fill_in 'p', with: 'Yahoo Japan'       

      click_button '検索'
    end

    it { expect(page).to have_content '日本最大級のポータルサイト。検索、オークション、ニュース、天気、スポーツ、メール、 ショッピングなど多数のサービスを展開。あなたの生活をより豊かにする「課題解決 エンジン」を目指していきます。' }
  end
end
