import React from 'react';
import './Pesquisadores.css';


import logoprin from"./images/logoprin.png"
import mainimage from "./images/mainimage.png"

function Page() {
  return (
    <div className="container">
      <head>
        <title>LADES - Sobre</title>
        <meta name="description" content="Página home" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <header className="header">

<div className="logopri">
        <img src={logoprin} className="logopri" alt="Logo Lades" />
</div>

<div className="logoprimob">
        <img src={logoprin} className="logoprimob" alt="Logo Nudes" />
</div>

<nav className="nav">
<ul className="ulheader">
      <a href="/lades/#/sobre" className="nucleo">O NÚCLEO</a>
      <a href="https://www.youtube.com/" className="nucleo">NOTICIAS</a>
      <a href="/lades/#/pesquisadores" className="nucleo">PESQUISADORES</a>
      <a href="/lades/#/pesquisa" className="nucleo">LINHAS DE PESQUISA</a>
      <a href="https://www.youtube.com/" className="nucleo">PROJETOS</a>
      <a href="/lades/#/biblioteca" className="nucleo">BIBLIOTECA</a>

<ul className="ulcontato">
<form action="/lades/#/contato">
        <button type="submit" className="contato"></button>
    </form>
</ul>
</ul>
</nav>

</header>

      <main className="maincontato">
<h1 className="contate">Conheça nossos pesquisadores</h1>
<section className="flexp">

<div className="rectanp">
  
    <div className="figure">
    </div>

    <div className="figmob">
    </div>

    <h1 className="figdesc">Danielle Freitas</h1>
</div>

<div className="rectanp">

    <div className="figure">
    </div>

    <div className="figmob">
    </div>

    <h1 className="figdesc">Alessandro Souza</h1>

</div>

<div className="rectanp">

  <div className="figure">
      </div>

      <div className="figmob">
      </div>

    <h1 className="figdesc">Leonardo Lucena</h1>

</div>

<div className="rectanp">

      <div className="figure">
        
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Leonardo Minora</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>
      
      <div className="figmob">
      </div>

      <h1 className="figdesc">Gilbert Azevedo</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Demóstenes</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Nome do Pesquisador</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Nome do Pesquisador</h1>

</div>

<div className="rectanp">

      <div className="figure">
      </div>

      <div className="figmob">
      </div>

      <h1 className="figdesc">Nome do Pesquisador</h1>

</div>

</section>
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default Page;