import logo from './resources/SecurBank_Logo_Main.svg';
import banner from './resources/banner.png';
import './App.css';
import Articles from './components/articles';
import Accountdetails from './components/accountdetails';
import Transactions from './components/transactions';
import Expenses from './components/expenses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-alerts'></div>
        <div className='header-nav'>
          <div>
            <img src={logo} className="logo" alt="logo" />
          </div>
      </div>
        
      </header>
      <main>
        <div className='section'>
          <div><img src={banner} className="banner" alt="banner" /></div>
          <div>
            <Accountdetails />
          </div>
          <div className='twocol'>
            <Transactions/>
            <Expenses />
          </div>
          <div>
            <Articles />
            </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
