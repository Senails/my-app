import Auth from './components/auth/Auth';
import Coin from './components/coin/Coin';
import { RootState, useAppDispatch, useAppSelector } from './Redux/store';

function App() {
  let user = useAppSelector((state:RootState)=>state.user);
  let dispatch = useAppDispatch();

  return (
    <div className="App">
      {user.auth? 'Авторизован':'Не авторизован'}
      {user.auth && <Auth/>}

      <div className='timebox'>
          <Coin size={100}/>
      </div>
    </div>
  );
}

export default App;
