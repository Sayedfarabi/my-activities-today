import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='d-flex text-primary'>
            <div className='me-3'>
                <h2><FontAwesomeIcon icon={faTasks}></FontAwesomeIcon></h2>
            </div>
            <div>
                <h2>MY-ACTIVITIES-OF-TODAY</h2>
            </div>
        </div>
    );
};

export default Header;