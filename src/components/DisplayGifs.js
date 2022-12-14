import React from 'react';
import useApi from '../reducers/useApi';
import ImagesReducer from '../reducers/ImagesReducer';
const DisplayGifs = ({ category }) => {

    const url = ` https://api.giphy.com/v1/gifs/search?api_key=lJdgnNYTZ0o1O3hPfyTBXZh8aKUBwQPu&q=${category}&limit=20`;
    const { loading, data } = useApi(url);

    return ( 
        <div className='container-gifs'>
            {
                loading ?
                    data.map(img => (
                    <ImagesReducer key={img.id}  url={img.images.downsized_medium.url} />
                    ))
                : ''
            }
        </div>

     );
}
 
export default DisplayGifs;