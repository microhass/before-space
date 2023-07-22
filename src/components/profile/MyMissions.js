import { useDispatch } from 'react-redux';
import { missionActions } from '../../redux/missions/missionSlice';
import classes from './profile.module.css';

const MyMission = ({ mission }) => {
  const { id, name } = mission;
  const dispatch = useDispatch();

  const cancelMembership = () => {
    dispatch(missionActions.toggleMissionMembership(id));
  };

  return (
    <li key={id} className={classes.item}>
      <span>{name}</span>
      <button
        type='button'
        className={classes.leave}
        onClick={cancelMembership}
      >
        leave mission
      </button>
    </li>
  );
};

export default MyMission;
