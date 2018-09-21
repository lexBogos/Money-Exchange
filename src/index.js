// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
var quantity = currency
var H = 50
var Q = 25
var D = 10
var N = 5
var P = 1
var a = 0
answer = {}

if (quantity > 10000) {
answer.error = "You are rich, my friend! We don't have so much coins for exchange"	
quantity = 0
}


if (quantity/H >= 1) 
{
a=Math.floor(quantity/H)
console.log(a)
quantity = quantity - a * H
console.log(quantity)
answer.H = a 
a = 0
}

if (quantity/Q >= 1) 
{
a=Math.floor(quantity/Q)
quantity = quantity - a * Q
answer.Q = a 
a = 0
}

if (quantity/D >= 1) 
{
a=Math.floor(quantity/D)
quantity = quantity - a * D
answer.D = a 
a = 0
}

if (quantity/N >= 1) 
{
a=Math.floor(quantity/N)
quantity = quantity - a * N
answer.N = a 
a = 0
}

if (quantity/P >= 1) 
{
a=Math.floor(quantity/P)
quantity = quantity - a * P
answer.P = a 
a = 0
}


return answer 
}

