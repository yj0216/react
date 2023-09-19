import { useRecoilState,RecoilRoot} from 'recoil';
import { useState,useEffect} from 'react';
import { contentState } from './state';

function App() {
  return (
    <RecoilRoot>
      <Sample />
    </RecoilRoot>
  );
}

function Sample() {
  const [reqContent, setReqContent] = useState({
    name: 'sample',
    status: true,
    message: '테스트 메세지'
  });
  // contentState = selector key값
  const [content, setContent] = useRecoilState(contentState);
  //const content = useRecoilValue(contentState); 
  //const setContent = useRecoilState(contentState);
  //const resetContent = useResetRecoilState(contentState);
  useEffect(() => {
    setContent(reqContent);
  }, [])

  const status = `${content.status}`;
  return (
      <div>
        {content.name},
        {status},
        {content.message}
      </div>
      )
}
export default App;
