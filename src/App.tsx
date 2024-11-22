import { Route, Routes} from 'react-router-dom';
import './App.css';
import { Support } from './pages/support/support';
import { Profile } from './pages/profile/profile';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/main' element={<Home/>}></Route>
          <Route path='/offers' element={<></>}/>
          <Route path='/recomendations' element={<></>}/>
          <Route path='/support'element={<Support/>}/>
          <Route path='/profile/:userid' element={<Profile/>}/>
        </Route>
        <Route path='/sign-up'element={<SignUp/>}/>
        <Route path='/sign-in'element={<SignIn/>}/>
      </Routes>
    </>
  );
}

export default App;
