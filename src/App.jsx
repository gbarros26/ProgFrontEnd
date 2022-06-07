
import FirstPage from './components/FirstPage';
import {MyContextProvider} from './context/myContext';
import SecondPage from './components/SecondPage';
import 'bootstrap/dist/css/bootstrap.min.css';
 //tag pai que sera o provedor-- provide --para os filhos --chilldren--   MYCONTEXT.PROVIDER

function App() {
 
  return (
    <div className="mt-4">
    <MyContextProvider>
    <SecondPage />
    <FirstPage />     
    </MyContextProvider>
    </div>
  );
}

export default App;
