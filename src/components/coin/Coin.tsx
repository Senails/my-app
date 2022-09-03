import { useEffect, useRef } from 'react'
import './style.scss'

export default function Coin({size}:{size:number}){
    let coinbox1 = useRef<HTMLDivElement>(null)
    let coinbox2 = useRef<HTMLDivElement>(null)
    let coin = useRef<HTMLDivElement>(null)

    let rand = Math.floor(Math.random()*6)

    useEffect(()=>{
        let randnum = Math.floor(Math.random()*20)-10;
        if (coinbox2.current) coinbox2.current.style.transform = `rotate(${randnum}deg)`;
        if (coinbox1.current){
            coinbox1.current.style.width=`${size}px`;
            coinbox1.current.style.height=`${size}px`;
        }
        let randnum2 = (Math.floor(Math.random()*60)+60);
    },[]);

    return <div ref={coinbox1} className="coinbox">
        <div ref={coinbox2} className='coinbox2'>
            <div ref={coin} className={'coin var'+rand}></div>
        </div>
    </div>
}