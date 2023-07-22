import { useDispatch } from 'react-redux';
import { missionActions } from '../../redux/missions/missionSlice';
import classes from './missions.module.css';


const SingleMission = ({ mission }) => {
  const { id, name, description, isMember } = mission;
  const dispatch = useDispatch();

  const toggleMembership = () => {
    dispatch(missionActions.toggleMissionMembership(id));
  };


  return (
    <tr className={classes.tableRow}>
      <td>{name}</td>
      <td className={classes.description}>{description}</td>

      {isMember ? (
        <>
          <td className={classes.button}>
            <span className={classes.badge}>active member</span>
          </td>
          <td className={classes.button}>
            <button
              type='button'
              className={classes.leave}
              onClick={toggleMembership}
            >
              Leave mission
            </button>
          </td>
        </>
      ) : (
        <>
          <td className={classes.button}>
            <span className={classes.inactive}>not a member</span>
          </td>
          <td className={classes.button}>
            <button
              type='button'
              className={classes.join}
              onClick={toggleMembership}
            >
              join mission
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default SingleMission;
