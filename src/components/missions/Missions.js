import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionSlice';
import { useEffect, useState } from 'react';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions?.length !== 0) return;
    dispatch(fetchMissions());
  }, []);

  return <div>Missions</div>;
};

export default Missions;
