var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var intstruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, intstruments) {
  var array = []
  for(let i = 0, l = musicians.length; i < l; i++) {
    array.push (`${musicians[i]} plays ${intstruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  
}