const fizzbuzz = require('./fizzbuzz')
test('FizzBuzz for multiples of 3', () => { 
    expect(fizzbuzz(3)).toContain('Fizz'); 
})
test('FizzBuzz for multiples of 5', () => { 
    expect(fizzbuzz(5)).toContain('Buzz'); 
})
test('Fizzbuzz for multiples of 3 & 5', () => { 
    expect(fizzbuzz(15)[-1]) == 'FizzBuzz'; 
})
test('Fizzbuzz for multiples of 11', () => { 
    expect(fizzbuzz(33)[-1]) == 'Bong'; 
})

test('Fizzbuzz for multiples of 13', () => { 
    expect(fizzbuzz(65)[-1]) == 'FezzBuzz'; 
})
test('Fizzbuzz for multiples of 13 and 11', () => { 
    expect(fizzbuzz(143)[-1]) == 'FezzBong'; 
})
test('Fizzbuzz for multiples of 17', () => { 
    expect(fizzbuzz(255)[-1]) == 'BuzzFizz'; 
})
