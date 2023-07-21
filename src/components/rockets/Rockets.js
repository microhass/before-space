import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketSlice';
import { useEffect } from 'react';
import SingleRocket from './SingleRocket';

const Rockets = () => {
  const dispatch = useDispatch();

  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets?.length !== 0) return;
    dispatch(fetchRockets());
  }, []);

  return (
    <section className='rockets'>
      {rockets.map((rocket) => (
        <SingleRocket key={rocket.id} rocket={rocket} />
      ))}
    </section>
  );
};

export default Rockets;
