import '../App.css';
import FriendsList from './FriendsList';

function SideHero({ProfileData}) {
  return (
    <div className="SideHero">
      <p>
        <a href="#">My Dashboard</a>
      </p>
      <p>
        <a href="#">Game's List</a>
      </p>
      <p>
        <a href="#">Purchased</a>
      </p>
      <p>
        <a href="#">Friends</a>
      </p>
      <p>
        <a href="#">Payments</a>
      </p>
      <p>
        <a href="#">Notification</a>
      </p>

    <FriendsList ProfileData={ProfileData}/>
    </div>
  );
}

export default SideHero;
