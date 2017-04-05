
const lexical = require('./lexical')    // 어휘분석
const syntax = require('./syntax')      // 구문분석
const semantic = require('./semantic')  // 의미분석

// 중간코드 생성
module.exports = function mmnParser(mmnCode) {
  const afterLexical = lexical(mmnCode)
  const afterSyntax = syntax(afterLexical)
  const afterSemantic = semantic(afterSyntax)

  return afterSemantic
}
