import FriendsCard from "../components/FriendsCard"

function FriendsList ({ProfileData}) {
    return <div><p>Online Players +</p>
        <FriendsCard ProfileData={ProfileData} />
    </div>
}

export default FriendsList