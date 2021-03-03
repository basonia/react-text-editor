import './App.css';
import TextEditor from "./components/TextEditor";
import styled from 'styled-components';
import { Component } from 'react';
import ReactScrollableFeed from 'react-scrollable-feed';
import ScrollableFeed from 'react-scrollable-feed';

function App() {
  return (
   
    <Container>
      <Header> 
        <h1>React Text Editor</h1>  
      </Header>
      <div className="editor">
        <ScrollableFeed>
          <TextEditor />
        </ScrollableFeed>
      </div>
    </Container>

  );
}

export default App;

const Header = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background: pink;
  padding: 10px;
  border-radius: 20px;
  box-shadow:  10px 10px 5px rgb(107, 7, 7),
  -10px -10px 5px rgb(107, 7, 7);
  
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 // height: 100%;
  //width: 100%;
`;