import { useState } from 'react'
import { RootState, useAppSelector } from '../../../Redux/store'
import Loader from '../../loader/Loader';
import './style.scss'

type forstate = 'login' | 'registr';

type propstype = {
    chagestate: (i:forstate)=>void;
    alogin: (i:string,j:string)=>void;
}

export default function Login({chagestate, alogin}:propstype){
    let message = useAppSelector((state:RootState)=>state.user.message);
    let loading = useAppSelector((state:RootState)=>state.user.loading);

    let [login,setlogin]= useState<string>('')
    let [password,setpassword]= useState<string>('')
    let [eye,seteye]=useState(false)


    return <div className='login'>
        {loading && <Loader/>}
        <div className='boxlogin'>
            <p className='mlogin'>
                Login
            </p>
            {message?<p className='loginmess'>{message}</p>:''}
        </div>
        <div className='input'>
            <label>
                <input type="text" value={login} onChange={(event)=>setlogin(event.target.value)}/>   
                <span className={'shad '+(login.length? 'active' : '')}>email</span>
                <span className={'plaseholder '+(login.length? 'active' : '')}>email</span>
            </label>
        </div>
        <div className='input'>
            <label>
                <input type={eye? 'text' : 'password'} value={password} onChange={(event)=>setpassword(event.target.value)}/>
                <span className={'shad '+(password.length? 'active' : '')}>password</span>
                <span className={'plaseholder '+(password.length? 'active' : '')}>password</span>
            </label>
            <div onClick={()=>seteye(!eye)} className={'eye '+ (eye && 'active')}></div>
        </div>
        <div className='flexboxx'>
            <span onClick={()=>chagestate('registr')}>or register</span>
            <span onClick={()=>alogin(login,password)}>login-{'>'}</span>
        </div>
    </div>
}

