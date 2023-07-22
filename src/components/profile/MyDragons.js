import { useDispatch } from 'react-redux';
import { dragonActions } from '../../redux/dragons/dragonSlice';
import classes from './profile.module.css';

const MyDragon = ({ dragon }) => {
  const { id, name } = dragon;
  const dispatch = useDispatch();

  const cancelReservation = () => {
    dispatch(dragonActions.toggleDragonReservation(id));
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

export default MyDragon;
