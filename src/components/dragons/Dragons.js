import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../../redux/dragons/dragonSlice';
import { useEffect } from 'react';

const Dragons = () => {
  const dispatch = useDispatch();

  const { dragons } = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragons?.length !== 0) return;
    dispatch(fetchDragons());
  }, []);
  
  return <div>Dragons</div>;
};

export default Dragons;
