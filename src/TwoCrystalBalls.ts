function twoCrystalBalls(array: boolean[]) {
    const jmpSize = Math.floor(Math.sqrt(array.length));

    let i = jmpSize
    for (; i < array.length; i += jmpSize) {
        if (array[i]) {
            break
        }
    }

    i -= jmpSize
    for (let j = 0; j < jmpSize && i < array.length; j++, i++) {
        if (array[i]) {
            return i
        }
    }

    return -1
}

// function twoCrystalBalls(breaks) {
//     const jmpAmount = Math.floor(Math.sqrt(breaks.length));

//     let i = jmpAmount;
//     for (; i < breaks.length; i += jmpAmount) {
//         if (breaks[i]) {
//             break;
//         }
//     }

//     i -= jmpAmount;
//     for (let j = i; j < breaks.length; j++) {
//         if (breaks[j]) {
//             return j;
//         }
//     }
//     return -1;
// }

export function run() {
    const a = Array(105).fill(false)
    a[103] = true
    console.log(twoCrystalBalls(a))

    const b = Array(10000).fill(false)
    b[9999] = true
    console.log(twoCrystalBalls(b))

    const c = Array(100000).fill(false)
    console.log(twoCrystalBalls(c))
}