var score = 79
var singleDigitScore = Math.floor(score/10)

switch (singleDigitScore) {
  case 10:
  case 9:
    console.log('A')
    break
  case 8:
  case 7:
    console.log('B')
    break
  case 6:
  case 5:
    console.log('C')
    break
  case 4:
  case 3:
    console.log('D')
    break
  default:
    console.log('F')
    break
}
