import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend';
export default function Friends(){
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend 
                friend={friend}></Friend>)
            }
        </div>
    )
}

/**
 * 1. state to hold data
 * 2. use Effect with dependency array
 * 3. use fetch load data
 * 4. set loaded data to the state
 * 5. diplay data on the component
 */ 