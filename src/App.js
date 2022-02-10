import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route 
          exact
          path='/'
          element={<Homepage />}
        />
      </Routes>
      

    </div>
  );
}

export default App;
