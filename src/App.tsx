import { Route, Routes } from 'react-router';
import './App.css';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';
import { Support } from './pages/support/support';
import { Profile } from './pages/profile/profile';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/offers' element={<></>}/>
        <Route path='/recomendations' element={<></>}/>
        <Route path='/support'element={<Support/>}/>
        <Route path='/sign-up'element={<></>}/>
        <Route path='/sign-in'element={<></>}/>
        <Route path='/profile/:userid' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
