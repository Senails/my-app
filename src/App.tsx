import Auth from './components/auth/Auth';
import { RootState, useAppDispatch, useAppSelector } from './Redux/store';

function App() {
  let user = useAppSelector((state:RootState)=>state.user);
  let dispatch = useAppDispatch();

  return (
    <div className="App">
      {user.auth? 'Авторизован':'Не авторизован'}
      {!user.auth && <Auth/>}
    </div>
  );
}

export default App;
