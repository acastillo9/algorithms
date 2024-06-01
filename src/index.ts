import * as readline from 'readline'
import { run as runLinealSearch } from './LinealSearch'
import { run as runBinarySearch } from './BinarySearch'
import { run as runTwoCrystalBalls } from './TwoCrystalBalls'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printAlgorthms() {
    console.log("****** ALGORITHMS ******")
    console.log("* 1: Lineal Search     *")
    console.log("* 2: Binary Search     *")
    console.log("* 3: Two Crystal Balls *")
    console.log("************************\n")
}

printAlgorthms()
rl.question('Select the script to execute (1-3) ', (answer) => {
    switch (answer.toLowerCase()) {
        case '1':
            runLinealSearch()
            break;
        case '2':
            runBinarySearch()
            break;
        case '3':
            runTwoCrystalBalls()
            break;
        default:
            console.log('Invalid selection!');
    }
    rl.close();
});