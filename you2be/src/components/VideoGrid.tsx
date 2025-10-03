import React from 'react'
import VideoCard from './VideoCard'
import Appbar from './Appbar'


const VIDEOS = [{
    title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
    title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
    title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
        title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
            title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
    title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
    title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
    title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
        title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
},
{
            title:"Dark King Silvers Rayleigh Powers and Abilities Unleashed - One Piece", 
    channel:"GrandLineReview",
    views:"2.5M",
    time:"3 Days",
    avatar: "/glr.webp",
    thumbnail: "/thumb.png"
}]
function VideoGrid() {
  return (
    <div>
    
    <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 '>
        {VIDEOS.map(video =>
            <div><VideoCard 
            title={video.title} 
            channel={video.channel}
            views={video.views}
            time={video.time}
            avatar={video.avatar}
            thumbnail={video.thumbnail}
            />
            </div>
        )}
    </div>
    </div>
  )
}

export default VideoGrid