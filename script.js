const stonks = {
    stonk0: 5,
    stonk1: 40,
    stonk2: 3,
    stonk3: 2,
    stonk4: 1,
    stonk5: 44,
    stonk6: 2,
    stonk7: 3,
}

let gaps = []

tempValue = 0

Object.values(stonks).forEach((probability) => {
    let value = [tempValue]
    value.push(tempValue + probability - 1)
    gaps.push(value)
    tempValue = value[1] + 1
})

console.log(gaps)

const number = Math.floor(Math.random() * 100);

gaps.forEach((gap, index) => {
    if (gap[0] <= number && number <= gap[1]) {
        document.querySelector('.output').innerHTML = (Object.keys(stonks)[index] + ' && ' + number)
    }
})