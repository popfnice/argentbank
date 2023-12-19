import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import SignIn from "./Pages/signIn"
import User from "./Pages/User"
import Header  from "./Compenents/Header/Header";
import Footer from './Compenents/Footer/Footer'
import { Provider } from 'react-redux';
import store from '../src/store';
import Error from './Pages/error';

function App() {
  return (
    <Provider store={store}>
    <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/profile' element={<User />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer content="Copyright 2020 Argent Bank"/>
        
          
    </Router>
    </Provider>
  );
}

export default App;
