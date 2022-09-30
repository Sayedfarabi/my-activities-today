import React from 'react';

const Break = (props) => {
    const { time, timeHandler } = props;
    return (
        <button onClick={() => timeHandler(time)} className='btn btn-primary rounded-circle p-2 me-2'>
            <p>{time}m</p>
        </button>
    );
};

export default Break;