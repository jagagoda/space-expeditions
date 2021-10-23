import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
`
function App() {
  return (
    <Styles>
    <Container fluid className="App" >
      <Home />
    </Container>
    </Styles>
  );
}

export default App;
