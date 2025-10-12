/* Arquivo app.js que contém a estrutura do projeto*/

import ButtonYellow from './components/Button yellow';
import Button from './components/Button';
import Input from './components/Input';
import {Container, Content, Row,} from './styles';
import { useState } from 'react';

const [currentNumber, setCurrentNumber] = useState(0);

function App() {
  return (
    <Container>
      <Content>
        <Input />
        <Row>
        <Button label="*" />
        <Button label="/" />
        <Button label="C" />
        <ButtonYellow label="X"/>
        </Row>
        <Row>
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <ButtonYellow label="-"/>
        </Row>
        <Row>
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <ButtonYellow label="+"/>
        </Row>
        <Row>
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <ButtonYellow label="=" />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
