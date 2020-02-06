import React from 'react';
import Spinner from '../assets/img/loading.gif';

const Loading = () => (
    <div>
        <img className="loading" src={Spinner} alt="" />
    </div>
);

export default Loading;