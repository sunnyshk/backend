import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const AddUSer = () => {
  const [address, setAdd] = useState([]);
  const [single, setSingle] = useState({
    houseNo: "",
    city: "",
    pincode: "",
    Country: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: [],
  });
  const handleAdd = (e) => {
    setSingle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    setForm({
      name: name,
      email: email,
      address: address,
    });
  }, [address, name, email]);
  const add = (e) => {
    e.preventDefault();
    let count = 0;
    for (let x in single) {
      if (single[x] === "") {
        count++;
        alert(`${x} cannot be empty`);
        break;
      }
    }
    if (count === 0) {
      setAdd((prev) => [...prev, single]);

      setSingle({
        houseNo: "",
        city: "",
        pincode: "",
        Country: "",
      });
    }
  };
  const submit = (e) => {
    e.preventDefault();
    post();
  };
  async function post() {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/create",
        form
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        name="name"
      />
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <br />
      <div>Address Form:</div>
      <input
        type="text"
        placeholder="Enter house no."
        onChange={handleAdd}
        name="houseNo"
        value={single.houseNo}
      />
      <input
        type="text"
        placeholder="Enter city"
        onChange={handleAdd}
        name="city"
        value={single.city}
      />
      <input
        type="Number"
        placeholder="Enter pincode"
        onChange={handleAdd}
        name="pincode"
        value={single.pincode}
      />
      <input
        type="text"
        placeholder="Enter Country"
        onChange={handleAdd}
        name="Country"
        value={single.Country}
      />
      <button onClick={add}>Add Address</button>
      <br />
      <input type="submit" onClick={submit} />
      {address.map((e, i) => (
        <div>
          <h2>Address {i + 1}:</h2>
          <div>Hno. : {e.houseNo}</div>
          <div>city: {e.city}</div>
          <div>pincode: {e.pincode}</div>
          <div>Country: {e.Country}</div>
        </div>
      ))}
    </form>
  );
};