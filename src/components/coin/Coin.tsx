import { useEffect, useRef, useState } from 'react'
import { apiadress } from '../../api/data';
import { RootState, useAppDispatch, useAppSelector } from '../../Redux/store'
import {setbalance} from './../../Redux/Slices/Userslice'
import './style.scss'

type propstype = {
    size:number;
    delay:number;
    time:number;
}

export default function Coin({size,time,delay}:propstype){
    let dispatch = useAppDispatch();
    let {token,auth}=useAppSelector((state:RootState)=>state.user)

    let [state, setstate] = useState<'show'|'hide'>('show')
    let [opacity , setopacity] = useState(false);
    let [hhide,sethhide]=useState<''|' none'>('');

    let coinbox1 = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if (coinbox1.current){
            coinbox1.current.style.width=`${size}px`;
            coinbox1.current.style.height=`${size}px`;
        }
    },[]);

    let mausehandler =function(){
        if (auth){
            if (state==='show'){
                setstate('hide');
                addcoin();
                setTimeout(() => {
                    setopacity(true)

                    setTimeout(() => {
                        sethhide(' none')

                        setTimeout(()=>{
                            sethhide('')

                            setTimeout(() => {
                                setstate('show')
                                setopacity(false)
                            }, 100);
                        },delay*1000)
                    }, 500);

                }, 500);
            }
        }
    }

    let addcoin = async function() {
        let res = await fetch(apiadress+'/addcoins',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "token": token,
                "coin": 1,
            })
        })

        let json = await res.json();
        if (json.monetbalance){
            dispatch(setbalance(json))
        }

    }

    let img;
    if (size>60){
        img = ' img1'
    }else if (size<=60 && size>50){
        img = ' img2'
    }else if (size<=50 && size>40){
        img = ' img3'
    }else if (size<=40){
        img = ' img4'
    }

    return <div ref={coinbox1} className={'coinbox'+hhide}>
        <div className={'coinbox2 '+ state}>
            <div onClick={mausehandler} className={'coin var'+time+img}></div>
        </div>
        {state==='hide' &&
        <span className={'text '+(opacity && 'opacity')}>
            +1 <div></div>
        </span>
        }
    </div>
}

