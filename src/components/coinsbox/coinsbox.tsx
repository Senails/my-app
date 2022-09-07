import Coin from '../coin/Coin'
import './style.scss'

type coinboxparams = {
    size: number;
    time:number;
    top:number;
    left:number;
}

let array: coinboxparams[] = [
    {size: 40, time:3, top: 33.4 , left: 16.4},
    {size: 40, time:4, top: 63.4, left: 7.4},
    {size: 40, time:1, top: 77.9 , left: 24.6},
    {size: 40, time:1, top: 29 , left: 37.6},
    {size: 40, time:4, top: 83.4 , left: 54.9},
    {size: 40, time:2, top: 40.1 , left: 59.3},
    {size: 40, time:1, top: 31.8 , left: 76.7},
    {size: 40, time:2, top: 90.7 , left: 78.6},
    {size: 40, time:2, top: 37.9 , left: 90},
    {size: 40, time:3, top: 67.9 , left: 93.2},

    {size: 50, time:1, top: 8.1 , left: 17.7},
    {size: 50, time:3, top: 53 , left: 20.9},
    {size: 50, time:2, top: 90.7 , left: 24.1},
    {size: 50, time:4, top: 19.7 , left: 56.1},
    {size: 50, time:1, top: 67.2 , left: 54.3},
    {size: 50, time:2, top: 12.9 , left: 76.7},
    {size: 50, time:4, top: 44.4 , left: 80.4},
    {size: 50, time:3, top: 66.8 , left: 72.1},

    {size: 60, time:1, top: 19.7 , left: 23.4},
    {size: 60, time:4, top: 47.8 , left: 8.9},
    {size: 60, time:3, top: 89.6 , left: 8.9},
    {size: 60, time:2, top: 66.1 , left: 33.3},
    {size: 60, time:4, top: 25.1 , left: 67.7},
    {size: 60, time:1, top: 81.2 , left: 69.6},
    {size: 60, time:3, top: 52.2 , left: 90.7},

    {size: 70, time:4, top: 18.1 , left: 7.3},
    {size: 70, time:2, top: 75.7 , left: 14.6},
    {size: 70, time:1, top: 44.1 , left: 30.3},
    {size: 70, time:3, top: 15.4 , left: 47.1},
    {size: 70, time:4, top: 85.1 , left: 37.6},
    {size: 70, time:2, top: 49.2 , left: 70.2},
    {size: 70, time:1, top: 23.4 , left: 86.9},
    {size: 70, time:3, top: 75.7 , left: 85},
] 

let delay = 10;

export default function Coinbox(){
    let res = array.map((obj:coinboxparams,index)=>{
        let divstyle = {
            top: obj.top+'%',
            left: obj.left+'%',
        };
        
        return <div className='minibox' key={index} style={divstyle}>
            <Coin size={obj.size} time={obj.time} delay={delay}/>
        </div>
    })

    return <div className='coinsbox'>
        {res}
        <Coin size={200} time={0} delay={delay}/>
    </div>
}