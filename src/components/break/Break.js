import React from 'react';

const Break = (props) => {
    return (
        <button className='btn btn-primary rounded-circle p-2 me-2'>
            <p>{props.time}m</p>
        </button>
    );
};

export default Break;