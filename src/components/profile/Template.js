import classes from './profile.module.css';
import MyMission from './MyMissions';
import MyRocket from './MyRockets';
import MyDragon from './MyDragons';

const Template = ({category, verb, categoryArray}) => {
  return (
    <div className={`profile-${category}s`}>
      <h3 className={classes.title}>my {category}s</h3>
      <ul className={classes.list}>
        {categoryArray.length === 0 && (
          <li className={classes.item}>
            no {category}s {verb}
          </li>
        )}

        {categoryArray.map((item) =>
          category === 'rocket' ? (
            <MyRocket key={item.id} rocket={item} />
          ) : category === 'dragon' ? (
            <MyDragon key={item.id} dragon={item} />
          ) : (
            <MyMission key={item.id} mission={item} />
          )
        )}
      </ul>
    </div>
  );
};

export default Template;
