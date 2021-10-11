//não aceita repetição/não indexada
const times = new Set()
times.add('Corinthians')
times.add('Bragantino').add('time verde sem mundial').add('São Paulo')
times.add('Flamengo')
times.add('Corinthians') //não aceita repetição

console.log(times)
console.log(times.size)
console.log(times.has('Corinthians'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

