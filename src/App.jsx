import wineData from '../wine-data.json';
import { Flavanoids } from './Flavanoids';
import { Gamma } from './Gamma'; 
 
const data = wineData;
 
 

function App() {
  return (
     <>
     <Flavanoids   /> 
     <Gamma  /> 
     </>
  );
}

export default App;
