/* Arquivo app.js que contém a estrutura do projeto*/

import ButtonYellow from './components/Button yellow';
import Button from './components/Button';
import Input from './components/Input';
import {Container, Content, Row,} from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  };
  
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => ` ${prev === '0' ? '' : prev}${number}`);
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} /> 
        <Row>
        <Button label="*" onclick={() => handleAddNumber('')} />
        <Button label="/" onclick={() => handleAddNumber('')} />
        <Button label="C" onclick={handleClear} />
        <ButtonYellow label="%" onclick={() => handleAddNumber('')} />
        </Row>
        <Row>
        <Button label="7" onclick={() => handleAddNumber('7')} />
        <Button label="8" onclick={() => handleAddNumber('8')} />
        <Button label="9" onclick={() => handleAddNumber('9')} />
        <ButtonYellow label="-" onclick={() => handleAddNumber('-')} />
        </Row>
        <Row>
        <Button label="4" onclick={() => handleAddNumber('4')} />
        <Button label="5" onclick={() => handleAddNumber('5')} />
        <Button label="6" onclick={() => handleAddNumber('6')} />
        <ButtonYellow label="+" onclick={handleSumNumbers} />
        </Row>
        <Row>
        <Button label="1" onclick={() => handleAddNumber('1')} />
        <Button label="2" onclick={() => handleAddNumber('2')} />
        <Button label="3" onclick={() => handleAddNumber('3')} />
        <ButtonYellow label="=" onclick={() => handleAddNumber('=')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
