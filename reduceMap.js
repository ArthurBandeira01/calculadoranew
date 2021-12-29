const produtos = [
    {
        nome: "Notebook",
        preco: 2100
    },
    {
        nome: "Tablet",
        preco: 500
    },
    {
        nome: "Smartphone",
        preco: 1500
    }
]
//Map: novos valores
const precosEmReais = produtos.map(p => p.preco * 4)
//console.log(precosEmReais)

//Reduce: reduz a um resultado
const total = produtos.reduce((a, b) => a + b.preco, 0)
//console.log(total)

//Map + reduce:
const total2 = produtos.map(p => p.preco * 4).reduce((a, b) => a + b, 0)
console.log(total2)