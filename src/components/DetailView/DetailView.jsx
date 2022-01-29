import react  from 'react'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function DetailView() {
    const dispatch = useDispatch();
    
    const details = useSelector(store => store.details)
    

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
                    <img src={detail.poster}/>
                    <p>{detail.description}</p>
                    <h4>genres: {detail.genres}</h4>
                   </div>
               ) 
            })}
        </section>
        <button onClick={toHomePage}>Home</button>
        </>
    )
}

export default DetailView;