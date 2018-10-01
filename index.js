function bruteForceTwoSum(array, sum) {
    let answers = []
    // let current = array[0]
    array.forEach(function(current, index) {
        let newArr = array.slice(index + 1)
        // let pairs = newArr.filter(num => {return current + num === sum})
        // if(pairs != []){answers.push(current, num)}
        newArr.forEach(num => {
            if(current + num === sum) {
                answers.push([current, num])
            }
        })
    })
    
    return answers
}