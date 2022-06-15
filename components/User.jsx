import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
export const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    try {
      let res = await axios.get("http://localhost:8080/user");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <button><Link to="/user/create">Add new User</Link></button>
      {user.map((e,i) => (
        <Link to={`${e._id}`} key={e._id}><div>User {i+1} - {e.name}</div></Link>
      ))}
    </div>
  );
};