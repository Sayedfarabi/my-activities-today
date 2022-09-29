import React, { useEffect, useState } from 'react';
import Activities from '../activities/Activities';
import Header from '../../components/header/Header';
import image from '../../said.jpg';
import Info from '../my-info/Info';
import Break from '../break/Break';
import Details from '../details/Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationPin, faMapLocation } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [selectedLists, setSelectedLists] = useState([]);
    let minutes = 0;

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const addToListHandler = (activity) => {
        const newSelectedLists = [...selectedLists, activity];
        setSelectedLists(newSelectedLists);
        // console.log(selectedLists.length);
        selectedLists.map(selectedList => minutes += selectedList.duration);
        console.log(minutes);
    }

    return (

        // Activities Section 
        <div className='row'>
            <div className='col-md-8 m-3'>
                <Header></Header>
                <h3 className='my-2'>Select today activities :</h3>
                <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
                    {
                        activities.map(activity => <Activities
                            key={activity.id}
                            activity={activity}
                            eventHandler={addToListHandler}
                        ></Activities>)
                    }
                </div>
            </div>

            {/* Activities Summery Section  */}
            <div className='col-md-3 shadow'>
                <div className='row m-3'>
                    <div className='col-sm-3 col-md-4'>
                        <img className='w-75 h-75 rounded-circle' src={image} alt="My pic" />
                    </div>
                    <div className='col-sm-9 col-md-8'>
                        <h5>Sayed Hasan Farabi</h5>
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
                    <h5>Add a Break :</h5>
                    <div className='bg-light d-flex justify-content-between align-items-center p-3 rounded'>
                        <Break time={30}></Break>
                        <Break time={60}></Break>
                        <Break time={75}></Break>
                        <Break time={90}></Break>
                        <Break time={120}></Break>
                    </div>
                </div>

                {/* Activities Details Section  */}

                <div className='mt-5'>
                    <h5>Activity Details :</h5>
                    <div>
                        <Details
                            name={"Activities Time"}
                            value={minutes}></Details>
                        <Details
                            name={"Break Time"}
                            value={minutes}></Details>
                    </div>
                </div>

                {/* Complated button section  */}

                <div className='mt-5'>
                    <button className='btn btn-primary w-100'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};


export default Main;