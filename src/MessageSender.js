import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import 'firebase/compat/firestore';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageURL, setImageURL] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the default behaviour
        // does not allows the page to refresh when button is clicked

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL,
        })
        // some clever DB stuff
        setInput("");
        setImageURL("");
    }
    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`Write a review or recipe, ${user.displayName}?`}
                    />
                    <input
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        type="text"
                        placeholder="Image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <LocationOnIcon style={{ color: "red" }} />
                    <h3>Location</h3>

                </div>
                {/* <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div> */}
                <div className='messageSender__option'>
                    <LocalDiningIcon style={{ color: "orange" }} />
                    <h3>Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;