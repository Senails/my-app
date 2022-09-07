import Auth from './components/auth/Auth';
import Coinbox from './components/coinsbox/coinsbox';
import MainUI from './components/mainui/mainUI';
import { RootState, useAppSelector } from './Redux/store';


function App() {
  let auth = useAppSelector((state:RootState)=>state.user.auth);


  return (
    <div className="App">
      <MainUI/>
      <Coinbox/>
      {!auth && <Auth/>}
    </div>
  );
}

export default App;



