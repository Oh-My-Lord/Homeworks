console.log("Задание 1")

function numberOne(a, b){
    return a + b
}

console.log(numberOne("Отв", "ет"))


console.log("Задание 2")

let massive = ["От", "вет"]
function conjoining(c, d){
    c = massive.pop()
    d = massive.shift()
    return d + c
}
console.log(conjoining())


console.log("Задание 3")

function strings(e, f){
    e = "От"
    f = "вет"
    return f + e
} 
console.log(strings())


console.log("Задание 4")

function letter(g){
    g = "ответ"
    return g[0].toUpperCase() + g.slice(1)
}
console.log(letter())


console.log("Задание 5")

function range(min, max){
    min = Math.ceil(1)
    max = Math.floor(10)
    return Math.floor(Math.random() * (max - min) + min)
}
console.log (range())


console.log("Задание 6")

let numbers = [1, 2, 3]
let sum = 0
numbers.forEach(function(num){
    sum += num
})
console.log(sum)


console.log("Задание 7")

let chisla = [1, 11, 21, 31, 41]
let summa = 0
for (let z = 0; z < chisla.length; z++) {
    summa += chisla[z]
}
let average = summa / chisla.length
console.log(average)


