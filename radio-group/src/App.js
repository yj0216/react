import styled from "styled-components";
import { dummy } from './questionDummy';
import Question from "./components/Question";


function App() {
  return (
    <RootWrap>
        {dummy.map( (item) =>(
          <Question key={item.idx} title={item.title} questionList={item.questionList} />
        ))
         
        }
      
    </RootWrap>
  );
}

export default App;

const RootWrap = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  width:100%;
  max-width:500px;

  left:50%;
  transform:translate(-50%,0);

  background-color: white;

  padding:20px
`;