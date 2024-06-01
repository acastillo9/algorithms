function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log('i:', i)
        for (let j = 0; j < arr.length - 1 - i; j++) {
            console.log('j:', j)
            console.log('arr[j]: ', arr[j], 'arr[j+1]: ', arr[j+1])
            if (arr[j] > arr[j+1]) {
                const tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
                console.log('swap!')
            }
        }
    }
    return arr
}

console.log(bubbleSort([5,4,7,3,8,6,2,1,9,0]))