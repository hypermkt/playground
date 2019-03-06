package token

type TokenType string
type Token struct {
	Type    TokenType
	Literal string
}

const (
	ILLEGAL = "ILLEGAL"
	EOF     = "EOF"

	INDENT = "INDENT"
	INT    = "INT"
	ASSIGN = "="
	MINUS  = "-"
	PLUS   = "+"

	COMMA     = ","
	SEMICOLON = ";"

	LPAREN = "("
	RPAREN = ")"
	LBRACE = "{"
	RBRACE = "}"

	BANG     = "!"
	SLASH    = "/"
	ASTARISK = "*"
	LESS     = "<"
	GREATER  = ">"

	FUNCTION = "FUNCTION"
	LET      = "LET"

	TRUE  = "TRUE"
	FALSE = "FALSE"
	IF    = "IF"
	ELSE  = "ELSE"
)
