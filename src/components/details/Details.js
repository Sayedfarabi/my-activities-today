import React from 'react';

const Details = (props) => {
    const { name, value } = props;
    return (
        <div className='bg-light rounded d-flex align-items-center justify-content-between p-1 mb-3'>
            <div>
                <p className='fs-6 fw-bolder'>{name}</p>
            </div>
            <div>
                <p className='text-muted fs-6'>{value} minutes</p>
            </div>
        </div>
    );
};

export default Details;