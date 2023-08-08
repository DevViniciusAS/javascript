// fetch
//http
//then e o catch

// então é com uma aquisição http que vamos enviar, receber, alterar um determinado valor

// Adicionar um novo usuário
// Front end > fetch > http > Back end > banco de dados

// Verbos HTTP

// GET --> Quando o cliente solicita algum dado.
// POST --> Queremos enviar algum dado a paertir do cliente.
// DELETE --> Queremos deletar algum dqado específico.
// PATCH --> Alterar um dado mais abrangente.
// PUT --> Alterar algum dado específico.

// CRUD \/
// Creat Read Update Delete

// Endpoint --> Nada mais é do que uma URL
// O responsável por criar os Endpoints, e denominar a responsabilidade de cada endpoint é o back end

// Um endpoint para criar um usuário
// Um endpoint para deletar um usuário
// Um endpoint para alterar dados de um usuário por exemplo

// https://api.coingecko.com/api/v3/exchange_rotes

// HTTP > 4 tipos de parâmetros de uma requisição HTTP

// Route parames
// Query parames
// Rody parames
// header parames

// API --> Application programing interface  --> Back end que a gente está interagindo

// CORS --> 

/*fetch('https://api.coingecko.com/api/v3/exchange_rates', 
{
    mode: 'cors', 
    method: 'POST', 
    body:{
        name: 'Vinicius',
        age: 31
    },
    headers:{

    }
}).then((data) => {
    console.log(data)
})*/


//    STATUS DE UMA RESPOSTA HTTP
// Sucesso 200 - 299
// Redirecionamento  300 - 399
// Erro no cliente  400 - 499
// Erro do servidor  500 - 599


// JSON -> javascript object notation

// JSON é um formato de organização de dados
// A diferença do JSON pro Objeto normal de javascript é que a chave de objeto deve ser em formato string
// Comum JSON ser usado como extensã para arquivos também, normalmente de configurações.

const obj = {name: 'Vinicius', age: 31}

// JSON.parse() // Vai basicamente transformar uma string em formato de JSON em um objeto javascript
console.log(JSON.stringify(obj)) // Vai pegar um objeto javascript e vai transformar em uma string em formato JSON.


