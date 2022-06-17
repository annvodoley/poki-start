
import './App.module.scss';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Cards from './components/Cards/Cards';
import classes from './components/Cards/Cards';
import ditto from '../src/images/Cards/ditto.svg';
import bulbasaur from '../src/images/Cards/bulbasaur.svg';
import weedle from '../src/images/Cards/weedle.svg';
import beedrill from '../src/images/Cards/beedrill.svg';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <Cards title = 'Ditto' url={ditto}/>
      <Cards title = 'Bulbasaur' url={bulbasaur}/>
      <Cards title = 'Weedle' url={weedle}/>
      <Cards title = 'Beedrill' url={beedrill}/>
      
            
      

    </div>
  );
};

export default App;
