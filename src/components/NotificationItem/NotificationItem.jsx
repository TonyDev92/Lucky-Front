import './NotificationItem.css';

function NotificationItem({ notification }) {
    return (
      <div className="padreNot">
        <h2 className="padreNot__h2">{notification?.title ?? 'Sin título'}</h2>
        <p className="padreNot__p">{notification?.body}</p>
        <small className="padreNot__small">{notification?.timestamp?.toLocaleString()}</small>
      </div>
    );
  }
  
  export default NotificationItem;