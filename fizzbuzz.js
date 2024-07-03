// This is our main function
const readline = require("readline")

function fizzbuzz(r1) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Range for FizzBuzz ", function (r){
        let range = r;

        let final = []
        const args = process.argv
        //range = args[2]
        let rules = args.slice(3, args.length)

        if (args.length == 2){
            rules = ['3','5','7','11','13','17']
        }


        for (let i = 1; i < range; i++){
            let words = []
            if (i%3 == 0 && rules.includes('3')){
                words.push("Fizz")
            }
            if (i%5 == 0 && rules.includes('5')){
                words.push("Buzz")
            }
            if (i%7 == 0 && 7 && rules.includes('7')){
                words.push("Bang")
            }
            if (i%11 == 0 && rules.includes('11')){
                words = ["Bong"]
            }
            if (i%13 == 0 && rules.includes('13')){
                if (words.length == 0){
                    words = ["Fezz"]
                } else{
                    let temp = 0 
                    while (temp < words.length){
                        if (words[temp][0] == "B"){
                            words = words.slice(0, temp) + "Fezz" + words.slice(temp, words.length)
                            break
                        } 
                        temp++
                    }       
                }
            }
            if (i%17 == 0 && rules.includes('17')){
                words.reverse()
            }


            //Outputing words + numbers
            if (words.length == 0){
                //console.log(i)
                final.push(i)
            } else {
                let word = ""
                for (let j = 0; j < words.length; j++){
                    word += words[j]
                }
                //console.log(word)
                final.push(word)
            }
        }
        console.log(final)
        return final
    })
    return 0
}

// Now, we run the main function:
fizzbuzz();

module.exports = fizzbuzz

