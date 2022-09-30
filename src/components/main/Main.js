import React, { useEffect, useState } from 'react';
import Activities from '../activities/Activities';
import Header from '../../components/header/Header';
import image from '../../said.jpg';
import Info from '../my-info/Info';
import Break from '../break/Break';
import Details from '../details/Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getFromDb } from '../database/addToDb';




const Main = () => {

    const [activities, setActivities] = useState([]);
    const [minutes, setMinutes] = useState(0);
    const [lsBreakTimes, setLsBreakTimes] = useState(0);
    const [breakTimes, setBreakTimes] = useState(0);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const toastsHandler = () => {
        alert(" 'Congratulations' You are Done with your activities")
    }

    const addToList = duration => {
        const newMinutes = minutes + duration;
        setMinutes(newMinutes);
        // setMinutes(duration);
    }
    addToDb(lsBreakTimes)

    const breakTimeHandler = time => {
        setLsBreakTimes(time)
    }

    useEffect(() => {
        const totalTime = getFromDb();
        setBreakTimes(totalTime);
    }, [lsBreakTimes]);

    return (
        // Activities Section 
        <div className='row'>
            <div className='col-md-8 m-3'>
                <Header></Header>
                <h3 className='my-2 py-2 bg-secondary text-center text-white'>Select Today Activities :</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3 g-4">
                    {
                        activities.map(activity => <Activities
                            key={activity.id}
                            activity={activity}
                            addToList={addToList}
                        ></Activities>)
                    }
                </div>
            </div>

            {/* Activities Summery Section  */}
            <div className='col-md-3 shadow summery'>
                <div className='row p-3 bg-secondary text-white'>
                    <div className='col-sm-12 text-center col-md-4'>
                        <img className='w-75 h-75 rounded-circle' src={image} alt="My pic" />
                    </div>
                    <div className='col-sm-12 text-center col-md-8'>
                        <h4>Sayed Hasan Farabi</h4>
                        <address><FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Dhaka, Bangladesh</address>
                    </div>
                </div>

                {/* Profile Info Section  */}

                <div className='d-flex justify-content-between bg-light'>
                    <Info
                        name={"Weight"}
                        value={"60"}
                        category={"kg"}>
                    </Info>

                    <Info
                        name={"Height"}
                        value={"5.4"}
                        category={"ft"}>
                    </Info>

                    <Info
                        name={"Age"}
                        value={"24"}
                        category={"yrs"}>
                    </Info>
                </div>

                {/* Add Break Section  */}

                <div className='mt-5'>
                    <h5 className='bg-secondary text-white py-3 text-center'>Add a Break :</h5>
                    <div className='bg-light d-flex justify-content-between align-items-center p-3 rounded'>
                        <Break time={30} timeHandler={breakTimeHandler}></Break>
                        <Break time={60} timeHandler={breakTimeHandler}></Break>
                        <Break time={75} timeHandler={breakTimeHandler}></Break>
                        <Break time={90} timeHandler={breakTimeHandler}></Break>
                        <Break time={120} timeHandler={breakTimeHandler}></Break>
                    </div>
                </div>

                {/* Activities Details Section  */}

                <div className='mt-5'>
                    <h5 className='bg-secondary text-white py-3 text-center'>Activity Details :</h5>
                    <div>
                        <Details
                            name={"Activities Time"}
                            value={minutes}></Details>
                        <Details
                            name={"Break Time"}
                            value={breakTimes}></Details>
                        {/* <Details
                            value={activitiesTime}></Details> */}
                    </div>
                </div>

                {/* Completed button section  */}

                <div className='mt-5'>
                    <button onClick={toastsHandler} className='btn btn-primary w-100'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};


export default Main;