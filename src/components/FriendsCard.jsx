import '../App.css'

function FriendsCard ({ProfileData}) {
    const RenderedFriends = ProfileData.map((profile) => {
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
        </div>
        )
    })

    return <div className='FriendsListCard'>
        {RenderedFriends}
    </div>
}

export default FriendsCard