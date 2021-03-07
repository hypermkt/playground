let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'max';

// userName = userInput;

function generateError(message: string, code: number) {
  throw { message: message, code: code };
}

const result = generateError('エラーが発生しました', 500);