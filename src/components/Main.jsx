import itens from '../datasets/Carrosel';
import produtosDataSet from '../datasets/Produto';
import Carrosel from './Carrosel';
import ComprasCard from './ComprasCard';
import { useState } from 'react';
import Services from './Services';
//import ProdutoForm from './ProdutoForm';
import serv from '../datasets/Services';

const Main = () => {
  let [produtos, ] = useState([...produtosDataSet]);

  return (
    <main>
      <Carrosel itens={itens} />
      <ComprasCard produtos={produtos}></ComprasCard>
      <Services services={serv}/>
      {/* <ProdutoForm></ProdutoForm> */}
    </main>
  );
};

export default Main;
