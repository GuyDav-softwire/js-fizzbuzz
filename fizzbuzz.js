// This is our main function
function fizzbuzz() {
    //const range = prompt("What number do you want to print up to?")

    for (let i = 1; i < 301; i++){
        let words = []
        if (i%3 == 0){
            words.push("Fizz")
        }
        if (i%5 == 0){
            words.push("Buzz")
        }
        if (i%7 == 0){
            words.push("Bang")
        }
        if (i%11 == 0){
            words = ["Bong"]
        }
        if (i%13 == 0){
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
        if (i%17 == 0){
            words.reverse()
        }


        //Outputing words + numbers
        if (words.length == 0){
            console.log(i)
        } else {
            let word = ""
            for (let j = 0; j < words.length; j++){
                word += words[j]
            }
            console.log(word)
        }
    }

}

// Now, we run the main function:
fizzbuzz();

