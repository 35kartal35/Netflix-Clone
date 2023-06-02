import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainPage from './pages/mainpage';
import Header from './component/Header';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
         <Route path='/' element={<MainPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
