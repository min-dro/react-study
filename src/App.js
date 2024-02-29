import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout2 from './components/Layout2';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import UseContextTest from './components/hook/UseContextTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 path(/) 인 경우 연결할 컴포넌트(Layout2) */}
        <Route path="/" element={<Layout2 />}>
          <Route path="/component/class" element={<ClassComponent />} />
          <Route path="/component/funtional"
          element={<FunctionalComponent />} />
          <Route path="/hook/context" element={<UseContextTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
