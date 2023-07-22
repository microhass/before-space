import { useSelector } from 'react-redux';
import classes from './profile.module.css';
import Template from './Template';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);
  const { dragons } = useSelector((state) => state.dragons);

  const myMissions = missions.filter((mission) => mission.isMember);
  const myRockets = rockets.filter((rocket) => rocket.reserved);
  const myDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <section className={classes.profile}>
      <Template
        category={'rocket'}
        categoryArray={myRockets}
        verb={'reserved'}
      />

      <Template
        category={'dragon'}
        categoryArray={myDragons}
        verb={'reserved'}
      />

      <Template
        category={'mission'}
        categoryArray={myMissions}
        verb={'joined'}
      />

      {/* <div className='profile-rockets'>
        <h3 className={classes.title}>my rockets</h3>
        <ul className={classes.list}>
          {myRockets.length === 0 && (
            <li className={classes.item}>no rockets reserved</li>
          )}
          {myRockets.map((rocket) => (
            <MyRocket key={rocket.id} rocket={rocket} />
          ))}
        </ul>
      </div> */}
    </section>
  );
};

export default Profile;
