import { useState } from 'react';
import { useAppDispatch} from '../../Redux/store';

import { cleanmessage, endload, setmessage, startload } from '../../Redux/Slices/Userslice';
import { validation } from '../../utils/registrvalidation';
import Login from '../login/Login';
import Register from '../register/Register';
import './style.scss'

export default function Auth():JSX.Element{
    let dispatch = useAppDispatch();
    type forstate = 'login' | 'registr';
    let [state,setstate]=useState<forstate>('login')
    let [svip , setsvip]=useState<boolean>(false);


    function change(string:forstate){
        dispatch(cleanmessage())
        setsvip(true);
        setTimeout(()=>{
            setstate(string);
            setsvip(false);
        },500)
    }

    function register(email:string,nick:string,pass:string,reppass:string){
        dispatch(cleanmessage())
        dispatch(startload());
        setTimeout(() => {

            let res = validation({email,password:pass, name:nick,reppass})
            if (res) dispatch(setmessage(res.massage))







            dispatch(endload());
        }, 500);
    }

    function login(login:string, pass:string){
        dispatch(cleanmessage())
        dispatch(startload());

        setTimeout(() => {
            dispatch(setmessage('login'))
            dispatch(endload());
        }, 1000);
    }


    return <div className='auth'>
        <div className={'authbox '+ (svip? 'svs': '')}>
            <div className='authconteiner'>
            {state==='registr' ? <Login chagestate={change} alogin={login}/> : <Register chagestate={change} aregister={register}/>}
            </div>
            <div className='authconteiner'>
            {state==='login'? <Login chagestate={change} alogin={login}/> : <Register chagestate={change} aregister={register}/>}
            </div>
        </div>
    </div>
}

