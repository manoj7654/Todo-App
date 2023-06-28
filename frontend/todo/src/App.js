
import './App.css';
import { AllRoutes } from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import AuthContextProvider from './Context/AuthContex';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
     <Navbar/>
     <AllRoutes/>

      </AuthContextProvider>
    </div>
  );
}

export default App;
