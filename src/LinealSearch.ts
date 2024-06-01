function linealSearch(array: number[], value: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i + 1
        }
    }
    return -1
}

export function run() {
    let position: number = linealSearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 1337)
    console.log(position)
    position = linealSearch([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 82)
    console.log(position)
}