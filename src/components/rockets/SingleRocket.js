import { useDispatch } from 'react-redux';
import { rocketActions } from '../../redux/rockets/rocketSlice';
import classes from './rocket.module.css'

const SingleRocket = ({ rocket }) => {
  const { id, name, description, testImage, reserved } = rocket;
  const dispatch = useDispatch();

  const toggleReservation = () => {
    dispatch(rocketActions.toggleRocketReservation(id));
  };

  return (
    <div className={classes.rocket}>
      <div className={classes.image}>
        <img src={testImage} alt={name} />
      </div>
      <div className='rocket-desc'>
        <h3 className={classes.title}>{name}</h3>
        <p className={classes.description}>
          {reserved && <span className={classes.badge}>Reserved </span>}
          {description}
        </p>

        {reserved ? (
          <button
            type='button'
            title='Cancel Reservation'
            onClick={toggleReservation}
            className={classes.cancel}
          >
            cancel reservation
          </button>
        ) : (
          <button
            type='button'
            title='Reserve Rocket'
            onClick={toggleReservation}
            className={classes.reserve}
          >
            reserve rocket
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleRocket;
