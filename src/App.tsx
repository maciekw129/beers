import { Routes, Route, Navigate } from 'react-router-dom';
// COMPONENTS
import Header from './components/organisms/Header/Header';
import Home from './components/templates/Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={ <Navigate to='/'/> }/>
        <Route path='/' element={ <Home /> }/>
      </Routes>
    </>
  );
}

export default App;
