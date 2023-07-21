import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketSlice';
import { useEffect } from 'react';
import SingleRocket from './SingleRocket';
import classes from './rockets.module.css'

const Rockets = () => {
  const dispatch = useDispatch();

  const { rockets, isLoading } = useSelector(
    (state) => state.rockets
  );

  useEffect(() => {
    if (rockets?.length !== 0) return;
    dispatch(fetchRockets());
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className={classes.rockets}>
      {rockets.map((rocket) => (
        <SingleRocket key={rocket.id} rocket={rocket} />
      ))}
    </section>
  );
};

export default Rockets;
