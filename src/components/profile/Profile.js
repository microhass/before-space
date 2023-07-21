import { useSelector } from 'react-redux';
import classes from './profile.module.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <section className={classes.profile}>
      <div className='profile-missions'>
        <h3 className={classes.title}>my missions</h3>
        <ul className={classes.list}>
          {missions.map((mission) => {
            const { id, name, isMember } = mission;
            if (isMember) {
              return (
                <li
                  key={id}
                  className={classes.item}
                >
                  {name}
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div className='profile-rockets'>
        <h3 className={classes.title}>my rockets</h3>
        <ul className={classes.list}>
          {rockets.map((rocket) => {
            const { id, name, reserved } = rocket;
            if (reserved) {
              return (
                <li key={id} className={classes.item}>
                  {name}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
