import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topic from './topic'
import All_Topic from './All_Topic'


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Topic />} />
        <Route path='/All_topic' element={<All_Topic />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App
