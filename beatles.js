function theBeatlesPlay(musicians, instruments) { 
	pairs = []
	for (i = 0; i < musicians.length; i++) { 
		pairs.push(`${musicians[i]} plays ${instruments[i]}`)
		}
	return pairs
}

function johnLennonFacts(facts){
	exclamations = []
	for (i = 0; i < facts.length; i++) {
		exclamations.push(`${facts[i]}!!!`)
	}
	return exclamations
}

function iLoveTheBeatles(num) {
	array = []
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15)

  return array

}