import React, { useEffect, useState } from 'react';
import Activities from '../activities/Activities';
import Header from '../../components/header/Header';

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
                <h3>Activities Summery</h3>
            </div>
        </div>
    );
};

export default Main;