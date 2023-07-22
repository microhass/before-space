import { useDispatch } from 'react-redux';
import { rocketActions } from '../../redux/rockets/rocketSlice';
import classes from './profile.module.css';

const MyRocket = ({ rocket }) => {
  const { id, name } = rocket;
  const dispatch = useDispatch();

  const cancelReservation = () => {
    dispatch(rocketActions.toggleRocketReservation(id));
  };

  return (
    <li key={id} className={classes.item}>
      <span>{name}</span>
      <button
        type='button'
        className={classes.leave}
        onClick={cancelReservation}
      >
        cancel reservation
      </button>
    </li>
  );
};

export default MyRocket;
