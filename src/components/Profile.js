import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <section className='profile'>
      <div className='profile-missions'>
        <h3>my missions</h3>
        <ul>
          {missions.map((mission) => {
            const { id, name, isMember } = mission;
            if (isMember) {
              return <li key={id}>{name}</li>;
            }
          })}
        </ul>
      </div>

      <div className='profile-rockets'>
        <h3>my rockets</h3>
        <ul>
          {rockets.map((rocket) => {
            const { id, name, reserved } = rocket;
            if (reserved) {
              return <li key={id}>{name}</li>;
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
