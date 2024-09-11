const express = require("express")
const app = express()

const path = require("path")

const PORTA = 3000
//Avisar ao expresse que os nossos arquivos estáticos estão aqui para ele juntar ao html e enviar
//Na pasta public entra CSS, imagem, icones, JS, ...
app.use(
    express.static(path.join(__dirname,"public"))
)
//Rota que o cliente vai acessar e o método que ele vai usar no caso GET
app.get("/", (pedido,resposta) => {
    resposta.sendFile(path.join(__dirname,"views","index.html"))
})

app.listen(PORTA, ()=>{
    console.log(`Servidor rodando com sucesso no  endereço: localhost:${PORTA}`)
})