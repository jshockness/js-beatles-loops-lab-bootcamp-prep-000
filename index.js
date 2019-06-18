var musicians 

function theBeatlesPlay(musicians, intstruments) {
  const array = []
  for(let i = 0, l = musicians.length; i < l; i++) {
    array.push (`${musicians[i]} plays ${instrument[i]}`)
  }
  return array
}