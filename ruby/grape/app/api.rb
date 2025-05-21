require 'grape'

class API < Grape::API
  format :json

  get '/hello' do
    {
      message: 'Hello, World!'
    }
  end

  # 単純なGET
  resource :users do
    get do
      [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com'
        },
      ]
    end
  end

  resource :posts do
    params do
      requires :user_id, type: Integer
    end
    get do
      [
        {
          id: 1,
          title: 'Post 1',
          content: 'Content 1'
        },
      ]
    end

    params do
      requires :name, type: String
    end
    post do
      {
        name: params[:name]
      }
    end
  end

  # パラメーターにバリデーションを設定したGET
  resource :books do
    params do
      requires :id, type: Integer, values: 1..100
    end

    get do
      {
        id: params[:id],
        title: 'Book Title',
        author: 'Author Name'
      }
    end
  end
end