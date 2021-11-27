// console.log("Merhaba Kodlama.io")

// // JS type safe değildir

// let dolarBugun = 9.30

// let dolarDun = 9.20
// dolarDun = "9.20"

// {
//     let dolarDun = 9.10
// }

// console.log(dolarDun)

// const euroDun = 11.2
// // euroDun = 11

// console.log(euroDun)

// //array
// //camelCasing
// //PascalCasing
// let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

// console.log("<ul>")

// for (let i = 0; i < konutKredileri.length; i++) {
//         console.log("<li>" + konutKredileri[i] + "</li>")
// }
// console.log("</ul>")

// console.log(konutKredileri)

let sayi1 = 10
let student = {id: 1, name: "Yağmur"}
//console.log(student)

function save(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}

save(undefined, student);

let students = ["Yağmur Polat", "Can Öztürk", "Engin Demiroğ", "Halit Kalaycı"]

// console.log(students)

let students2 = [student, {id: 2, name: "Can"}, "Ankara", {city: "İstanbul"}]
//console.log(students2)

//rest
//params C#
//varArgs java
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10, ["Elma", "Armut", "Karpuz"])


//spread 
let points = [1,2,3,4,50,4,60,14]
//console.log(...points)
//console.log(Math.max(...points))

//console.log(..."ABC", "D",..."EFG", "H")

// let ask = "CAN ÖZTÜRK"
// console.log(ask)
// console.log(...ask)

// Destructuring
let populations = [10000, 20000, 30000, [40000,100000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small) 
console.log(medium) 
console.log(high) 
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name: "içecek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)

//Redux