import './App.css';
import BandList from './components/BandList/BandList';
import Header from './components/Header/Header';
import MetalMeta from './components/MetalMeta/MetalMeta';

function App() {
  return (
    <div className="App">
      <Header />
      <MetalMeta />
      <BandList />
    </div>
  );
}

export default App;
