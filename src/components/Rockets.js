import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketSlice';
import { useEffect } from 'react';

const Rockets = () => {
  const dispatch = useDispatch();

  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets?.length !== 0) return;
    dispatch(fetchRockets());
  }, []);

  return <div>Rockets</div>;
};

export default Rockets;
