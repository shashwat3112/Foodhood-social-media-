import React from 'react';
import './StoryReel.css';
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            {/* Story */}
            <Story
                image="https://st3.depositphotos.com/8393210/13622/v/950/depositphotos_136220518-stock-illustration-black-white-vector-map-of.jpg?forcejpeg=true"
                // profileSrc="https://www.gravatar.com/avatar/97a0977287dad274db63963c937077de?s=290&20210315"
                title="Near me"
            />
            <Story
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Kochi_montage2.jpg/250px-Kochi_montage2.jpg"
                // profileSrc="https://www.gravatar.com/avatar/97a0977287dad274db63963c937077de?s=290&20210315"
                title="Kochi"
            />
            <Story
                image="https://www.tajhotels.co.uk/wp-content/uploads/2017/10/TRIVANDRUM-2.jpg"
                // profileSrc="https://www.gravatar.com/avatar/97a0977287dad274db63963c937077de?s=290&20210315"
                title="Trivandrum"
            />
            <Story
                image="https://im.rediff.com/news/2014/aug/25chennai1.jpg"
                // profileSrc="https://www.gravatar.com/avatar/97a0977287dad274db63963c937077de?s=290&20210315"
                title="Chennai"
            />
            <Story
                image="https://static.toiimg.com/thumb/msid-88428704,width-900,height-1200,resizemode-6.cms"
                // profileSrc="https://www.gravatar.com/avatar/97a0977287dad274db63963c937077de?s=290&20210315"
                title="Mumbai"
            />
        </div>
    )
}

export default StoryReel