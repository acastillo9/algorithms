function binarySearch(array: number[], value: number) {
    let lo = 0
    let hi = array.length
    let count = 0

    do {
        const m = Math.floor(lo + (hi - lo) / 2)
        const v = array[m]

        if (v === value) {
            return true
        } else if (v > value) {
            hi = m
        } else {
            lo = m + 1
        }
        count += 1
    } while (lo < hi)

    return false
}

export function run() {
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 90)) // true
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 91)) // false
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 69420))
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 1))
    console.log(binarySearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 0))
}