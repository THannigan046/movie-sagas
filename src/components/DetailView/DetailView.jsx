import react  from 'react'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function DetailView() {
    const dispatch = useDispatch();
    
    const details = useSelector(store => store.details)
    const genres = details.genres

    console.log('details in page is', details);
    const history = useHistory();
    const toHomePage = () => {
        history.push('/')
    }
    return (
        <>
        <section>
            {details.map(detail => {
               return (
                   <div key={detail.id}>
                       <h1>{detail.title}</h1>
                    <img src={detail.poster}/>
                    <p>{detail.description}</p>
                    <h3>Genre: {detail.genres}</h3>
                   </div>
               ) 
            })}
            
        </section>
        <button onClick={toHomePage}>Home</button>
        </>
    )
}

export default DetailView;