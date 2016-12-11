var wordArray = ['phantasmagoric', 'doe', 'idiosyncratic', 'interregnum']

var maxLength = 5

var smallArray = []

for (i in wordArray) { // for (var i =0; i <= wordArray.length; i++) {
  if (wordArray[i].length < maxLength) {
    smallArray.push(wordArray[i])
  }
}

console.log(smallArray)
