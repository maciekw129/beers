import { Routes, Route, Navigate } from 'react-router-dom';
// COMPONENTS
import Header from './components/organisms/Header/Header';
import Home from './components/templates/Home/Home';
import BeerList from './components/templates/BeerList/BeerList';
import BeerDetail from './components/templates/BeerDetail/BeerDetail';
import Footer from './components/molecules/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path='*' element={ <Navigate to='/'/> }/>
          <Route path='/' element={ <Home /> }/>
          <Route path='beer-list/:page' element={ <BeerList /> } />
          <Route path='beer-list/beer/:id' element={ <BeerDetail />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
