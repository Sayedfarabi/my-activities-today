import React from 'react';

const Info = (props) => {
    const { value, name, category } = props;
    return (
        <div className='mx-2 bg-light'>
            <div>
                <p className='fs-3 fw-bolder'>{value}<span className='fs-6 text-muted'>{category}</span></p>
            </div>
            <div>
                <p className='fs-5 text-muted'>{name}</p>
            </div>
        </div>

    );
};

export default Info;