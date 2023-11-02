import Score from '../Score/Score';
import { useSelector } from 'react-redux';
import { selectPlayerName } from '../../redux/snakeSlice';

import './LeftSideBar.scss';

const LeftSideBar = () => {
    const playerName = useSelector(selectPlayerName);
    return (
        <div className='leftSideBar'>
            <Score />
            <div className='playerName'>{playerName}</div>
            <div className='foodInfo'>
                <div className='foodBlock'>
                    <div className='appleImg'></div>
                    <p> – 1 point</p>
                </div>
                <div className='foodBlock'>
                    {/* <img src='/assets/pineapple2-f1ab8d12.png' alt='apple' /> */}
                    <div className='pineappleImg'></div>
                    <p> – 5 points</p>
                </div>
                <div className='foodBlock'>
                    {/* <img src='/assets/watermelon-0aa5a3e9.png' alt='apple' /> */}
                    <div className='watermelonImg'></div>
                    <p> – 10 points</p>
                </div>
            </div>
            <div className='controlInfo'>
                <p>
                    <span className='space'>Space</span> – pause
                </p>
            </div>
        </div>
    );
};

export default LeftSideBar;
