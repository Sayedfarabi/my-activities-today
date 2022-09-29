import React, { useEffect, useState } from 'react';
import Activities from '../activities/Activities';
import Header from '../../components/header/Header';
import image from '../../said.jpg';
import Info from '../my-info/Info';

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [summery, setSummery] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const addToListHandler = (activity) => {
        setSummery(activity);
        console.log(summery);
    }

    return (
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

            <div className='col-md-3 shadow'>
                <div className='row m-3'>
                    <div className='col-sm-3 col-md-4'>
                        <img className='w-75 h-75 rounded' src={image} alt="My pic" />
                    </div>
                    <div className='col-sm-9 col-md-8'>
                        <h5>Sayed Hasan Farabi</h5>
                        <address>Dhaka, Bangladesh</address>
                    </div>
                </div>
                <div className='d-flex justify-content-between mx-3'>
                    <Info
                        name={"Weight"}
                        value={"60"}
                        category={"kg"}>
                    </Info>

                    <Info
                        name={"Weight"}
                        value={"60"}
                        category={"kg"}>
                    </Info>

                    <Info
                        name={"Weight"}
                        value={"60"}
                        category={"kg"}>
                    </Info>


                </div>
            </div>
        </div>
    );
};

export default Main;