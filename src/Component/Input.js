import { useState } from "react";
import { Link } from "react-router-dom";


function Input() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdd] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = (e) => {
    if (name && email && phone && address) {
      const newTask = { id: new Date().getTime().toString(), name: name, email:email,phone:phone,address:address };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localMember", JSON.stringify([...tasks, newTask]));
      setName("");
      setEmail("");
      setPhone("");
      setAdd("");
    }
  };
  return (
    <>
    <h1>Add Member</h1>
      <div className="form">
      <label>
        Name
      </label>
      <input
          name="name"
          type="text"
          value={name}
          placeholder="Write your name..."
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <label>
        Email
      </label>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Write your email..."
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
<label>
        Phone  Number
      </label>
        <input
          name="phone"
          type="number"
          value={phone}
          placeholder="Write your phone..."
          className="form-control"
          onChange={(e) => setPhone(e.target.value)}
        />
<label>
        Address
      </label>
        <input
          name="address"
          type="text"
          value={address}
          placeholder="Write your address..."
          className="form-control"
          onChange={(e) => setAdd(e.target.value)}
        />

      <button type="submit" className="bttn" onClick={addTask}>
        Submit
      </button>
      <Link to="/display"><button type="submit" className="bttn2">
        Display Member
      </button></Link>
    </div>
    </>
  );
}
export default Input