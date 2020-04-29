// Add your functions here
const map = (array, functionA) => {
    const newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(functionA(array[i]))
    }
    return newArray
}
/////// what the fuck is that hahaha//////
function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }