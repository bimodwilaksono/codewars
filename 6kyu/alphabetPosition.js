function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  return text.toLowerCase().split('').map(el => alphabet.includes(el) ? alphabet.indexOf(el)+1 : '').filter(el => el).join(' ')
}

console.log(alphabetPosition('Hello, guys!'))