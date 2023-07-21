import { useDispatch } from 'react-redux';
import { missionActions } from '../../redux/missions/missionSlice';

const SingleMission = ({ mission }) => {
  const { id, name, description, isMember } = mission;
  const dispatch = useDispatch();

  const toggleMembership = () => {
    dispatch(missionActions.toggleMissionMembership(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>

      {isMember ? (
        <>
          <td>
            <span className='badge'>active member</span>
          </td>
          <td>
            <button type='button leave' onClick={toggleMembership}>
              Leave mission
            </button>
          </td>
        </>
      ) : (
        <>
          <td>
            <span className='badge inactive'>not a member</span>
          </td>
          <td>
            <button type='button join' onClick={toggleMembership}>
              join mission
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default SingleMission;
