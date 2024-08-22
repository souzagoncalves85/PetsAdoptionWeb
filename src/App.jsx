import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    <Container>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  );
}

export default App;
