import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Logout({setUser}){
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://127.0.0.1:4000/logout", {
      method: 'DELETE',
    })
    .then(res => {
        if (res.ok) {
            setUser(null)
            navigate('/Login')
        }
    //   window.localStorage.setItem("user", JSON.stringify(null))
    })
  }, []);

  return (

      <div className="Logout ">
        <p>Logged Out</p>
      </div>
  )
}

export default Logout 