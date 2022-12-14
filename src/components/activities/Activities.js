import React from 'react';
import "./Activities.css";

const Activities = (props) => {
    // console.log(props.activity)
    const { addToList, activity } = props;
    const { img, title, duration } = activity;
    // let minutes = 0;



    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h5>Time Required : {duration}</h5>
                </div>
                <div className="card-footer">
                    <button onClick={() => addToList(duration)} className='btn btn-primary w-100'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Activities;