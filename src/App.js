import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import styled from 'styled-components'
import Api from './components/Api';

const Styles = styled.div`
padding: 0 8px;
background: linear-gradient(297.9deg, #323237 15.11%, #000000 90.89%);
min-height: 100vh;
`
function App() {
  return (
    <Styles>
    <Container className="App" >
      <Api/>
    </Container>
    </Styles>
  );
}

export default App;
