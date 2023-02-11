import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Display() {
const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      if(localStorage.getItem("localMember")){
          const storedList = JSON.parse(localStorage.getItem("localMember"));
          setTasks(storedList);
      }
  },[])
  const handleDelete = (task)=>{
      const deleted = tasks.filter((t)=>t.id !== task.id);
      setTasks(deleted);
      localStorage.setItem("localMember", JSON.stringify(deleted))
  }

  return (
    <>
    <h1>Member Record</h1>
    <br></br>
    <Table  bordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
            <React.Fragment key={task.id}>
                <tr>
                <td>{task.name}</td>
                <td>{task.email}</td>
                <td>{task.phone}</td>
                <td>{task.address}</td>
                <td><button onClick ={()=> handleDelete(task)}
                >🗑️</button></td>
                </tr>
            </React.Fragment>
        ))}
      </tbody>
    </Table>
    <Link to="/"><button type="submit" className="bttn">
    Add Member
  </button></Link>
  </>
  )
}

export default Display