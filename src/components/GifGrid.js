import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import { GifGirdItem } from './GifGirdItem';

const GifGrid = ({ category }) => {
    
    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs(category).then( setImages );
    // }, [category]);

    const { data:images, loading } = useFetchGifs(category);


    return (

        <>
            <h2 className="animate__animated animate__fadeIn">{ category }</h2>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                    { 
                        images.map( (img) => {
                            return (
                                <GifGirdItem 
                                    key={ img.id }
                                    { ...img }
                                />
                            );
                        } ) 
                    }
            </div>
        </>
    );
}
 
export default GifGrid;