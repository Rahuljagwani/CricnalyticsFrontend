import { useState } from 'react';
import './Ml.css';
import BatterPrice from './BatterPrice';
import BowlerPrice from './BowlerPrice';
import AllRounderPrice from './AllRounderPrice';

const Ml = () => {

    const [player, setplayer] = useState('batter');

    const handleChange = (e) => {
        setplayer(e.target.value);
    }

    if (player === 'batter') {
        return <>
            <div className='container shadow-lg rounded w-25 px-2 py-2 mt-5 main-div'>
                <div className='container'>
                    <label className='text-white'>Select type of player to predict price:</label>
                    <br></br>
                    <select className='d-down m-2' onChange={handleChange} value={player}>
                        <option value="batter">Batter</option>
                        <option value="bowler">Bowler</option>
                        <option value="allrounder">ALL-Rounder</option>
                    </select>
                </div>
            </div>
            <BatterPrice />
        </>
    } else if (player === 'bowler') {
        return <>
            <div className='container shadow-lg rounded w-25 px-2 py-2 mt-5 main-div'>
                <div className='container'>
                    <label className='text-white'>Select type of player to predict price:</label>
                    <br></br>
                    <select className='d-down m-2' onChange={handleChange}>
                        <option value="batter">Batter</option>
                        <option value="bowler">Bowler</option>
                        <option value="allrounder">ALL-Rounder</option>
                    </select>
                </div>
            </div>
            <BowlerPrice /></>

    } else if (player === 'allrounder') {
        return <>
            <div className='container shadow-lg rounded w-25 px-2 py-2 mt-5 main-div'>
                <div className='container'>
                    <label className='text-white'>Select type of player to predict price:</label>
                    <br></br>
                    <select className='d-down m-2' onChange={handleChange}>
                        <option value="batter">Batter</option>
                        <option value="bowler">Bowler</option>
                        <option value="allrounder">ALL-Rounder</option>
                    </select>
                </div>
            </div>
            <AllRounderPrice /></>
    }
}
export default Ml;