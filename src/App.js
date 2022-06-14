import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login'
import { useStateValue } from "./StateProvider"

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const user = 'Shammi';
  return (
    // BEM naming convention
    <div className="app" >
      {!user ? (
        <Login />
      ) : (
        <>
          < Header />
          <div className='app__body'>
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
