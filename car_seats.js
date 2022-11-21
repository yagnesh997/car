p = [1, 4, 1]
s = [1, 5, 1]
let x = 0
let y = 0
count = 0
for (let i = 0; i < p.length; i++) { 
    x += p[i] 
  }
  while (x > 0) {
    count+=1
    let z= s.sort(function(a, b){return a - b}) 
    let max = Math.max(...z)
    x = x-max
    s.pop()
}
console.log(count);