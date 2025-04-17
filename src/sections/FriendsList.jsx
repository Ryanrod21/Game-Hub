import { useState } from "react"
import FriendsCard from "../components/FriendsCard"
import '../App.css'

function FriendsList ({ProfileData}) {
    const [showPopup, setPopup] = useState(false)
    const [inputValue, setInputValue] = useState("");

    const togglePopup = () => setPopup(!showPopup)

    const handleInputChange = (e) => setInputValue(e.target.value)


    return  <>
    
    <div className="FriendsPanel"><p>Online Players</p>
        <button className="addBtn" onClick={togglePopup}>+</button>
        {showPopup && (
        <div className="popup-box">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
        </div>
      )}
    </div>
        <FriendsCard ProfileData={ProfileData} />
    </>
}

export default FriendsList