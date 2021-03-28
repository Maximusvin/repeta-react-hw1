import '../../App.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const styleIsOnline = isOnline
    ? 'online statusFriends'
    : 'offline statusFriends';

  return (
    <li className="itemFriend">
      <span className={styleIsOnline}></span>
      <img className="avatarFriends" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
