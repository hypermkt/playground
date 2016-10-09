require 'spec_helper'

describe 'Goopeの各ページが正常に閲覧できること確認する' do
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
      /service/
    ).each do |p|
  it_behaves_like 'correct response', p
  end
end
