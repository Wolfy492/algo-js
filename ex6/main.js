let a = "Jean"
let b = "Paul"
let result = null

function checkname(reg1, reg2) {
  if (reg1 === reg2) {
    result = "même"
  
  }
  else result = "pas la même"
  console.log(result)
}
checkname(a, b)