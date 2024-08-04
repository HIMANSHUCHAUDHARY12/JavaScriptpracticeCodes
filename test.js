const rl = require( 'readline')
const reader = rl. createInterface ({
input: process. stdin, 
output: process. stdout})
reader. on('line', (line) =>{
const [a, b,c] = line.split(" ")
const P=parseInt(a)
const R=parseInt (b)
const T=parseInt(c)
amt=P*(1+R/100)**T
ci=amt-P
    console.log(ci)
})