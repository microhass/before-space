import { useDispatch } from 'react-redux';
import { rocketActions } from '../../redux/rockets/rocketSlice';

const SingleRocket = ({ rocket }) => {
  const { id, name, description, testImage, reserved } = rocket;
  const dispatch = useDispatch();

  const toggleReservation = () => {
    dispatch(rocketActions.toggleRocketReservation(id));
  };

  return (
    <div className='rocket'>
      <div className='rocket-img'>
        <img src={testImage} alt={name} />
      </div>
      <div className='rocket-desc'>
        <h3>{name}</h3>
        <p>{description}</p>

        {reserved ? (
          <button type='button' onClick={toggleReservation}>
            cancel reservation
          </button>
        ) : (
          <button type='button' onClick={toggleReservation}>
            reserve rocket
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleRocket;
