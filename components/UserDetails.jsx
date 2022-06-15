import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const UserDetails = () => {
  const { id } = useParams();
  const [det, setDet] = useState({});
  const [add,setAdd] = useState([])
  useEffect(() => {
    details();
  }, []);
  async function details() {
    try {
      let res = await axios.get(`http://localhost:8080/user/${id}`);
      setDet(res.data);
      setAdd(res.data.address)
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div>
      <div>
        <div>"name:"{det.name}</div>
        <div>"email:"{det.email}</div>
        {add.map((e,i) => (
          <div>
            <h3>Address {i+1} :-</h3>
            <div>HouseNo: {e.houseNo}</div>
            <div>City: {e.city}</div>
            <div>Pin: {e.pincode}</div>
            <div>County:{e.Country}</div>
          </div>
        ))}
      </div>
    </div>
  );
};