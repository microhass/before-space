import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../../redux/dragons/dragonSlice';
import { useEffect } from 'react';
import SingleDragon from './SingleDragon';
import classes from './dragons.module.css';

const Dragons = () => {
  const dispatch = useDispatch();

  const { dragons, isLoading } = useSelector(
    (state) => state.dragons
  );

  useEffect(() => {
    if (dragons?.length !== 0) return;
    dispatch(fetchDragons());
  }, []);

  if (isLoading) return <div className='loading'>Loading...</div>;

  return (
    <section className={classes.dragons}>
      {dragons.map((dragon) => (
        <SingleDragon key={dragon.id} dragon={dragon} />
      ))}
    </section>
  );
};

export default Dragons;
