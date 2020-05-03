const map = (array, whatToDo) => {
    return array.map(number => whatToDo(number))
}

const reduce = (array, startingValue = 0) => {
    return array.reduce(function(memo, i) {memo + i }, startingValue)
}



// function reduce(src, cb, starting){
//     let r = (!!starting) ? starting : src[0]
//     let i = (!!starting) ? 0 : 1
  
//     for (; i < src.length; i++) {
//       r = cb(src[i], r)
//     }
  
//     return r;
//   }