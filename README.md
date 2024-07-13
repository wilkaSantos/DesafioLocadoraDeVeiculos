<h1 align="center">Lok Carros</h1>

<p align="center">
  <i>Desenvolvendo uma aplicação web de uma Locadora de Veículos.</i>
</p>
<br/>
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#️-instalação">Instalação</a>
</p>
<br>

## 🚀 Tecnologias

<br>
O projeto está sendo desenvolvido com as seguintes tecnologias:

- Back-end
	+ Node.js
	+ SQLite
  + Knex
	
- Front-end
	+ React
  
<br>
<br>

## 💻 Projeto

<br>
<br>
 Uma locadora de veículos, onde o cliente possa realizar o seu cadastro, verificar os veículos disponíveis e se desejar alugar o veículo por dias, semanas ou meses. E para o gestor e seus funcionários ficará disponível a parte de gestão.

<br>
 Com base na modelagem de Usuário, Carro e Reserva. Os processos da aplicação contam criar, atualizar e listar os dados.
<br>
<br>
Realizei validações em alguns processos:<br>


- [Veja o código está ficando meu projeto](https://github.com/wilkaSantos/DesafioLocadoraDeVeiculos.git)

<br>

## ⚙️ Instalação

O Lok Carros requer o [Node.js](https://nodejs.org/) v16+ para ser executado.
<br>

Instale as depêndencias e inicie o servidor:

```sh
npm i
```

Criar as tabelas no banco:

```sh
knex migrate:latest
```
