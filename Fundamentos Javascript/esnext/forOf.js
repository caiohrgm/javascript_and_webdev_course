for(let letter of "Cod3r") {
    console.log(letter)
}

const subjectsEcma = ['Map', 2, 4, 'Love']

for (let subject of subjectsEcma) {
    console.log(subject)
}

// Usign with Map:
const subjectMap =new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let subject of subjectMap){
    console.log(subject)
}

for (let key of subjectMap.keys()){
    console.log(key)
}

for (let value of subjectMap.values()){
    console.log(value)
}

for (let [key,value] of subjectMap.entries()){
    console.log(key, value)
}

// Usign with Set:
const s = new Set(['a','b','c','d'])
for(let letter of s) {
    console.log(letter)
}