import { RootState, useAppSelector } from '../../Redux/store'
import './style.scss'

export default function MainUI(){
    let {nickname, monetbalance, cristalbalance, auth} = useAppSelector((state:RootState)=> state.user)


    return <div className={'mainui '+(auth && 'active')}>
        <div className='left'>
            <span className='name'>
                {nickname}
            </span>
            {monetbalance!==0 &&
            <span className='coins'><div className='coin'></div>
                {monetbalance}
            </span>
            }
            {cristalbalance!==0 &&
            <span className='coins'><div className='coin'></div>
                {cristalbalance}
            </span>
            }
        </div>


    </div>
}