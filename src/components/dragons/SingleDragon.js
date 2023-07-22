import { useDispatch } from 'react-redux';
import { dragonActions } from '../../redux/dragons/dragonSlice';
import classes from './dragons.module.css';

const SingleDragon = ({ dragon }) => {
  const { id, name, type, testImage, reserved } = dragon;
  const dispatch = useDispatch();

  const toggleReservation = () => {
    dispatch(dragonActions.toggleDragonReservation(id));
  };

  return (
    <div className={classes.dragon}>
      <div className={classes.image}>
        <img src={testImage} alt={name} />
      </div>
      <div className='dragon-desc'>
        <h3 className={classes.title}>{name}</h3>
        <p className={classes.type}>
          {reserved && (
            <span className={classes.badge}>Reserved </span>
          )}
          {type} type
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
            title='Reserve Dragon'
            onClick={toggleReservation}
            className={classes.reserve}
          >
            reserve dragon
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleDragon;
