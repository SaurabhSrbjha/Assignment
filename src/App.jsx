import wineData from '../wine-data.json';
import { Flavanoids } from './Flavanoids';
import { GammaStatistics } from './Gamma';
 
const data = wineData;
// console.log(data);
function App() {
  return (
     <>
     <Flavanoids/>
     <GammaStatistics />
     </>
  );
}

export default App;
