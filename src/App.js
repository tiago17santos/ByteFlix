import React from 'react';
import Menu from './components/Menu';
import dados_iniciais from './data/dados_inicais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';



function App() {
  return (
    <div style = {{background: '#141414'}}>
      <Menu />
      <BannerMain 

        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front"}
      />
      
      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[0]}
      />
      
      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[1]}
      />

<Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[2]}
      />


      <Footer />
    </div>
  );
}

export default App;
