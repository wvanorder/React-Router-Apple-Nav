import './NavLink.scss';
import React from 'react';

const Image = props => {
    return(
        <div className="imageHolder">
            <img src={props.subcat.image} />
        </div>
        
    )
};

export default Image;
