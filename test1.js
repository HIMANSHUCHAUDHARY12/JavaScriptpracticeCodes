const rl = require('readline')
 

 const reader = rl.createInterface({
  input: process.stdin,
  output: process.stdout
 })
 

 reader.on('line', (line) => {
  const [a, b,c] = line.Split(" ")
 
  const P=parseFloat(a)
  const R=parseFloat(b)
  const T=parseFloat(c)

   // write your code here: 
 

   amt=P*(1+R/100)**T
   ci=amt-P
       console.log(ci)
  
 

 })