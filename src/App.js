import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout2 from './components/Layout2';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import UseContextTest from './components/hook/UseContextTest';
import AdressBook from './components/AdressBook';
import UseMemoTest from './components/hook/UseMemoTest';
import UseCallbackTest from './components/hook/UseCallbackTest';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 path(/) 인 경우 연결할 컴포넌트(Layout2) */}
        <Route path="/" element={<Layout/>}>
          <Route path="/component/class" element={<ClassComponent />} />
          <Route path="/component/funtional"
          element={<FunctionalComponent />} />
          <Route path="/hook/context" element={<UseContextTest />} />
          <Route path="/adressBook" element={<AdressBook />} />

          <Route path="/hook/memo" element={<UseMemoTest />} />
          <Route path="/hook/callback" element={<UseCallbackTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
