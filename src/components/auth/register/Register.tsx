import { useState } from 'react'
import { RootState, useAppSelector } from '../../../Redux/store'
import Loader from '../../loader/Loader';
import './style.scss'


type forstate = 'login' | 'registr';
type propstype = {
    chagestate: (i:forstate)=>void;
    aregister: (i:string,j:string,k:string,z:string)=>void;
}

export default function Register({chagestate , aregister}:propstype){
    let message = useAppSelector((state:RootState)=>state.user.message);
    let loading = useAppSelector((state:RootState)=>state.user.loading);

    let [login,setlogin]= useState<string>('');
    let [nickname,setnickname]= useState<string>('');
    let [password,setpassword]= useState<string>('');
    let [reppassword,setreppassword]= useState<string>('');
    let [eye,seteye]=useState(false);
    let [eye2,seteye2]=useState(false);


    return <div className='registr'>
        {loading && <Loader/>}
        <div className='boxlogin'>
            <p className='mlogin'>
                Register
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
                <input type="text" value={nickname} onChange={(event)=>setnickname(event.target.value)}/>   
                <span className={'shad '+(nickname.length? 'active' : '')}>name</span>
                <span className={'plaseholder '+(nickname.length? 'active' : '')}>name</span>
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
        <div className='input'>
            <label>
                <input type={eye2? 'text' : 'password'} value={reppassword} onChange={(event)=>setreppassword(event.target.value)}/>
                <span className={'shad '+(reppassword.length? 'active' : '')}>repeat password</span>
                <span className={'plaseholder '+(reppassword.length? 'active' : '')}>repeat password</span>
            </label>
            <div onClick={()=>seteye2(!eye2)} className={'eye '+ (eye2 && 'active')}></div>
        </div>
        <div className='flexboxx'>
            <span onClick={()=>chagestate('login')}>or login</span>
            <span onClick={()=>aregister(login,nickname,password,reppassword)}>register-{'>'}</span>
        </div>
    </div>
}