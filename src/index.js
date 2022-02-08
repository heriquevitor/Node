// Aqui ele importa a biblioteca responsavel chamado de modulo //
const http = require("http")
// Ele precisa de um hostname(quem é o servidor) //
const hostname = "localhost"
// A porta que ele vai comunicar //
const port = 3333
// Aqui ele vai importar a função e ela pede um listener(ouvindo as nossas requisições//
// Essa função precisa ter dois parametros://
// O req (informações requisitadas) res é a resposta do servidor//
const server = http.createServer((req, res)=>{
//Aqui ele quer uma resposa ai usar o res//
// Precisamos de um cabeçalho//
    res.setHeader("Content-type", "text/plain")
    res.end("Picadinho")

})
server.listen(port, hostname,()=>{console.log("Servidor Rodando")})