import React from 'react';
import { Link } from 'react-router-dom';

const Sheard = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='user/add'>Add User</Link>
        </div>
    );
};

export default Sheard;