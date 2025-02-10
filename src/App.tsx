import { Route, Routes} from 'react-router-dom';
import './App.css';
import { Support } from './pages/support/support';
import { Profile } from './pages/profile/profile';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { Nopage } from './pages/nopage/nopage';
import { Offers } from './pages/offers/offers';
import { Recomendations } from './pages/recomendations/recomendations';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>}></Route>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/recomendations' element={<Recomendations/>}/>
          <Route path='/support'element={<Support/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="*" element={<Nopage/>}/>
        </Route>
        <Route path='/sign-up'element={<SignUp/>}/>
        <Route path='/sign-in'element={<SignIn/>}/>
      </Routes>
    </>
  );
}

export default App;
