import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/counter';
import Profile from './profile';
import Login from './features/login';
import Color from './color';
import ViewAccount from './ViewAccount';


function App() {

  return (
    <div className="App">
      <div >
        <header className="App-header">
          <Counter />
          <Profile />
          <Login />
          <Color />
          <ViewAccount />
        </header>
      </div>
    </div>
  );
}

export default App;
