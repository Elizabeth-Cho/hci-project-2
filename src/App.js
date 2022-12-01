import logo from './logo.svg';
import AppNavbar from './components/AppNavbar';
import DataVisualization from './components/DataVisualization';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <div className="report-content">
        <header>
          <h1>Global Access to Technology and Education - Pre-Covid vs Post-Covid</h1>
          <h3>Shichang Ke, Elizabeth Cho, Abdullah Yousuf</h3>
          <hr/>
        </header>
        <DataVisualization/>
      </div>
    </div>
  );
}

export default App;
