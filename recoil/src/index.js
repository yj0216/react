import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import worker from "./mocks/browser";

if(process.env.NODE_ENV === "development"){
  worker.start({
    onUnhandleRequest: "bypass",
  });
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </RecoilRoot>
);

