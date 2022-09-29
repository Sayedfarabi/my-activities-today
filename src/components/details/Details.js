import React from 'react';

const Details = (props) => {
    return (
        <div className='bg-light rounded d-flex align-items-center justify-content-between p-2 mb-2'>
            <div>
                <p className='fs-6 fw-bolder'>{props.name}</p>
            </div>
            <div>
                <p className='text-muted fs-6'>{props.value} minutes</p>
            </div>
        </div>
    );
};

export default Details;