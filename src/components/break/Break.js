import React from 'react';

const Break = (props) => {
    return (
        <div className='bg-light rounded-circle p-2'>
            <p>{props.time}m</p>
        </div>
    );
};

export default Break;