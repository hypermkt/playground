package lexer

type Lexer struct {
	input        string
	position     int  // 入力における現在の位置(現在の文字を指し示す)
	readPosition int  // これから読む位置
	ch           byte // 現在検査中の文字
}

func New(input string) *Lexer {
	l := &Lexer{input: input}
	l.readChara()
	return l
}

func (l *Lexer) readChara() {
	if l.readPosition >= len(l.input) {
		l.ch = 0
	} else {
		l.ch = l.input[l.readPosition]
	}
	l.position = l.readPosition
	l.readPosition += 1
}
