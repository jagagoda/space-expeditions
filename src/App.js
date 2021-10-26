import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container }  from 'react-bootstrap';
import styled from 'styled-components'
import HomePage from './components/Pages/HomePage';

const Styles = styled.div`
padding: 0 8px;
background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
min-height: 100vh;
`
function App() {
  return (
    <Styles>
    <Container className="App" >
      <HomePage/>
    </Container>
    </Styles>
  );
}

export default App;
