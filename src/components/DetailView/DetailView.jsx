import react  from 'react'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Button } from '@mui/material';



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
                    <Typography>{detail.description}</Typography>
                    <h3>Genre: {detail.genres}</h3>
                   </div>
               ) 
            })}
            
        </section>
        <Button onClick={toHomePage}>Home</Button>
        </>
    )
}

export default DetailView;