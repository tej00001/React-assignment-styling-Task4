import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.Users.map((user) => {
          return (
            <li key={user.id}>
              {user.username} ({user.age}year old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
