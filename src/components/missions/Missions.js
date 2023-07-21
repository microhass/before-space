import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionSlice';
import { useEffect } from 'react';
import SingleMission from './SingleMission';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions?.length !== 0) return;
    dispatch(fetchMissions());
  }, []);

  return (
    <section className='missions'>
      <table border={1}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <SingleMission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
