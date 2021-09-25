function permutation(string) {
  if (string.length < 2) 
  return string 

  let permutations = [] 
  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    if (string.indexOf(char) != i) 
      continue

      let remainingString = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let subPermutation of permutation(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations
}

let myString ='Cat'
 permutations = permutation(myString)
 for (permutation of permutations)
   console.log(permutation) 