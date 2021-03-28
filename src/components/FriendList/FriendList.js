import FriendListItem from './FriendListItem';
import '../../App.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(item => (
      <FriendListItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    ))}
  </ul>
);

export default FriendList;
