var userInput;
var userName;
userInput = 5;
userInput = 'max';
// userName = userInput;
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('エラーが発生しました', 500);
