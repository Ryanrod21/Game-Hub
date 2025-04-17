import '../App.css'
import { FaCircle } from 'react-icons/fa'; 

function FriendsCard ({ProfileData}) {

    const StatusIcon = ({ color = 'green' }) => (
        <FaCircle color={color} size={12} />
      );
      
    //   Usage
    //   <StatusIcon color="green" />
    //   <StatusIcon color="red" />
    // filter(profile => profile.status === "online")
    const RenderedFriendsOnline = [...ProfileData].sort((a, b) => {
        // Put 'online' users before anything else
        if (a.status === "online" && b.status !== "online") return -1;
        if (a.status !== "online" && b.status === "online") return 1;
        return 0;
      })
    .map((profile) => {
        if(profile.status === 'online'){

            return (
                <div className='FriendsCardWrapper'>

        <div className="FriendsCard" key={profile.id}>
        <img className="ProfileImg" src={profile.img}/>
         <span className='ProfileHover'>{profile.name} </span>
         <div className='Profile-popup'>{profile.description}

            <ul>
                {profile.games?.map((game) => {
                    return  <li>{game.title}: {game.hoursPlayed}</li>
                })}
            </ul>
                </div>
         </div>
         <StatusIcon color="green" />
        </div>
        
        )
    }else {
        return (
            <div className='OfflineCardWrapper'>

            <div className="FriendsOfflineCard" key={profile.id}>
            <img className="ProfileImgOffline" src={profile.img}/>
             <span className='ProfileHoverOffline'>{profile.name} </span>
             <div className='Profile-popupOffline'>
                {profile.offline}
            </div>
             </div>
             <StatusIcon color="red" />
            </div>
        )
    }
    })
    

    return <div className='FriendsListCard'>
        {RenderedFriendsOnline}
    </div>
}

export default FriendsCard