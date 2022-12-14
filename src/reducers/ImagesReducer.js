import React from 'react';

const ImagesReducer = ({ title, url }) => {
    return ( 
        <div>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    );
}
 
export default ImagesReducer;