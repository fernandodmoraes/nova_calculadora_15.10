var LAST = ''
const OPERATORS = ['*', '/', '-', '+']
const handleClick = (e) => {
let value = e.getAttribute('value')
checkLeftZeros()
    if (value == 'clear') {
        handleClear()
    } 
    else if (value == '=') {
        handleResult()
        LAST = value
    } 
    else if (!checkForDoubleOperators(value)) {
    if (LAST == '=') {
       document.getElementById('resultado').innerHTML = ''
    }
       insertValue(value)
       LAST = value
    }
}
const insertValue = (value) => {
      result = document.getElementById('resultado')
      result.innerHTML += value
      checkLeftOperators()
      }
const checkForDoubleOperators = (value) => {
    if (OPERATORS.includes(value) && OPERATORS.includes(LAST)) {
        return true
    }
    return false
}
const checkLeftZeros = () => {
    result = document.getElementById('resultado')
    if (result.innerHTML[0] == 0) {
       result.innerHTML = ''
    }
}
const checkLeftOperators = () => {
    result = document.getElementById('resultado')
    if (OPERATORS.includes(result.innerHTML[0])) {
       result.innerHTML = '0'
    }
}
const handleClear = () => {
    result = document.getElementById('resultado')
    result.innerHTML = result.innerHTML.slice(0, -1)
}
const handleResult = () => {
    result = document.getElementById('resultado')
    result.innerHTML = eval(result.innerHTML)
}