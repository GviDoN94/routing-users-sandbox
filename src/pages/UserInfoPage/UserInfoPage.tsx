import { useParams } from 'react-router-dom';
import { USERS } from '@/data';
import './UserInfoPage.css';

export function UserInfoPage() {
  const { userId } = useParams();
  const user = USERS[Number(userId)];

  if (!user) {
    return (
      <div className="userInfoPage">
        <h2>UserInfoPage</h2>

        <div className="user">
          <p>Пользоватвеля с таким ID нет</p>
        </div>
      </div>
    );
  }

  return (
    <div className="userInfoPage">
      <h2>UserInfoPage</h2>

      <div className="user">
        <p>{user.jobTitle}</p>
        <p>{user.email}</p>
        <img
          src={user.avatar}
          alt=""
          width={200}
          height={200}
        />
        <p>{user.fullName}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}
