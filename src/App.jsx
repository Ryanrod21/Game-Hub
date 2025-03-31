import './App.css';
import ShowAlarm from './sections/showAlarm';
import ShowMusic from './sections/showMusic';
import ShowStream from './sections/showStream';
import NavBar from './sections/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ShowAlarm />
      <ShowMusic />
      <ShowStream />
    </div>
  );
}

export default App;
