import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";

function Dashboard() {




    const [suc, setSuc ] = useState()
 
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(()=> {
        axios.get('http://localhost:3001/dashboard')
        .then(res => {
            console.log("dashboard: " + res.data);
            if(res.data === "Success") {
                setSuc(res.data)
            } else {
                navigate('/')
            }
        }).catch(err => console.log(err))
    }, [])

    

    return ( 
        <div>
            <h2>dashboard</h2>
            {/* <span class="logged-in-as">Logged in as: {username}</span> */}
            <p>{suc}</p>
            {/* <p>{res.data.role}</p> */}
            <Link to={`/addact`}className="btn btn-success btn-sm align-center">ADD AND REMOVE ACTIVITITES</Link>
            <br/>
            <br/>
            <Link to={`/addclubheads`}className="btn btn-success btn-sm">ADD AND REMOVE CLUB HEAD</Link>
            <br/>
            <br/>
            <Link to={`/addclubmembers`}className="btn btn-success btn-sm">ADD AND REMOVE CLUB MEMBERS</Link>
            <br/>
            <br/>
            <Link to={`/addclubprojects`}className="btn btn-success btn-sm">ADD AND REMOVE PROJECTS</Link>
            <br/>
            <br/>
            <Link to={`/addinventory`}className="btn btn-success btn-sm">ADD AND REMOVE CLUB INVENTORY</Link>
        </div>

     );
}

export default Dashboard;