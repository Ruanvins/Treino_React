/*Página de estilo do react formatação css
dos elementos compostos no app.js */

import styled from "styled-components";

/*Criando constantes que são descritas como tag HTML
dentro do app.js*/
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cAcAcA;

  display: flex;
  alin-items: center;
  justify-content: center;
`;

/*Criando constantes que são descritas como tag HTML
dentro do app.js*/
/*criando area da calculadora*/
export const Content = styled.div`
    background-color: #fff;
    width: 80%;
    min-height: 500px;
    `

    export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    alin-items: center;
    `

    export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    alin-items: center;
    `
    
    

