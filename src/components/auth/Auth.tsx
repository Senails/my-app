import { useCallback, useEffect, useState } from 'react';
import { RootState, useAppDispatch} from '../../Redux/store';

import { cleanmessage, endload, setmessage, startload, setlogin, loginprops } from '../../Redux/Slices/Userslice';
import { validation } from '../../utils/registrvalidation';
import Login from './login/Login';
import Register from './register/Register';
import './style.scss'
import { gettoken } from '../../utils/memtoken';
import { apiadress } from '../../api/data';
import { useSelector } from 'react-redux';



export default function Auth():JSX.Element{
    let auth = useSelector((state: RootState)=>state.user.auth);
    let dispatch = useAppDispatch();
    type forstate = 'login' | 'registr';
    let [state,setstate]=useState<forstate>('login')
    let [svip , setsvip]=useState<boolean>(false);


    let change =useCallback(function(string:forstate){
        dispatch(cleanmessage())
        setsvip(true);
        setTimeout(()=>{
            setstate(string);
            setsvip(false);
        },500)
    },[])

    let register = useCallback(async function(email:string,nick:string,pass:string,reppass:string){
        dispatch(cleanmessage())
        dispatch(startload());

        let res = validation({email,password:pass, name:nick,reppass})
        if (res) {
            dispatch(setmessage(res.massage))
        }else{

            let resfetch = await fetch(apiadress+'/auth/registr',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": pass,
                    "nickname" : nick
                })
            });
            let json = await resfetch.json();

            if (json.message){
                let obj: {message: string} = json;
                dispatch(setmessage(obj.message));
                console.log(json)
            }else{
                let obj: loginprops = json;
                dispatch(setlogin(obj));
            }
        }


        dispatch(endload());
    },[])

    let login = useCallback(async function(login:string, pass:string){
        dispatch(cleanmessage())
        dispatch(startload());

        let res = await fetch(apiadress+'/auth/login',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "email": login,
                "password": pass
            })
          });

        let json = await res.json();

        if (json.message){
            let obj: {message: string} = json;
            dispatch(setmessage(obj.message));
            console.log(json)
        }else{
            let obj: loginprops = json;
            dispatch(setlogin(obj));
        }
        dispatch(endload());
    },[])

    let authme = useCallback(async function() {
        let token = gettoken()
        if (!token) return

        dispatch(cleanmessage())
        dispatch(startload());

        let res = await fetch(apiadress+'/auth/me',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "token": token
                })
          });

        let json = await res.json();

        if (json.message){
            let obj: {message: string} = json;
            dispatch(setmessage(obj.message));
        }else{
            let obj: loginprops = json;
            dispatch(setlogin(obj));
        }
        dispatch(endload());
        
    },[])

    useEffect(()=>{authme()},[])

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

