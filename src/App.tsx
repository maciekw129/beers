import { Routes, Route } from 'react-router-dom';
// COMPONENTS
import Header from './components/organisms/Header/Header';
import Home from './components/templates/Home/Home';
import BeerList from './components/templates/BeerList/BeerList';
import Footer from './components/molecules/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          
          <Route path='/' element={ <Home /> }/>
          <Route path='/beer-list' element={ <BeerList /> }>
            <Route path='/beer-list/:page' element={ <BeerList />}/>
          </Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
