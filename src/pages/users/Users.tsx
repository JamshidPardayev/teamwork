import "./Users.css"
import { useEffect, useState } from "react";
import { api } from "../../api";

const Users = () => {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const response = await api.get("/users")
        const data = response.data
        setUsers(data.users)
        console.log(data.users)
        setLoading(false)
      })()

    }, 1000)
  }, [])
  
  return (
    <>
    <div className="main-container">
      {loading? <div className="loading-box">
        <div className="loading-spinner"></div>
        Loading...
      </div> : null}
      {users?.map(user => (
        <div style={{width:"300px", margin: "10px", padding: "10px", borderRadius: "10px", boxShadow: "0 0 10px gray"}} className="user-container" key={user.id}>
          <h1 className="firstName">Name: {user.firstName}</h1>
          <h1 className="lastName">Last Name: {user.lastName}</h1>
          <h1 className="maidenName">Maiden Name: {user.maidenName}</h1>
          <h1 className="phone">Phone: {user.phone}</h1>
          <h1 className="education">Education: {user.unversity}</h1>
          <h1 className="username">Username: {user.username}</h1>
          <h1 className="height">Height: {user.height}</h1>
          <h1 className="birthDate">Birth Date: {user.birthDate}</h1>
          <h1 className="gender">Gender: {user.gender}</h1>
        </div>
      ))}
    </div>
    </>
  )
};

export default Users;
