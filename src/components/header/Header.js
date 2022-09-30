import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='d-flex justify-content-center text-warning bg-dark fw-bolder py-4'>
            <div className='me-3'>
                <h1><FontAwesomeIcon icon={faTasks}></FontAwesomeIcon></h1>
            </div>
            <div>
                <h1>MY-ACTIVITIES-OF-TODAY</h1>
            </div>
        </div>
    );
};

export default Header;