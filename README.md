# Teste Técnico
Foi criado um parser (para ler e manipular log games), juntamente com a api (para realizar a consulta do relatório de games)

# Tecnologias
<ul>
<li>NodeJs</li>
<li>Express</li>
<li>Mocha/Chai/Chai-http</li>
</ul>


# Instalando
Clone o repositório, ou faça o download, abra na pasta onde baixou e utilize o comando:
<b>npm install</b>

Após instalar todas as dependências, rode o seguinte comando:
<b>npm run server</b>
A api para consulta estará na porta http://localhost:8080/


Para listar todos os games utilize a seguinte rota:
http://localhost:8080/games

Para listar um jogo específico, utilize a rota com o id do jogo:
Ex: http://localhost:8080/games/3

# Testes
Foi realizado testes tanto do parser como das rotas, utilizando mocha, chai e chai-http.
Para rodar todos os testes executar o comando:
<b>npm run test</b>


# Author
Melina Garcia Carniel
