// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// function Homex() {

//     const [suc, setSuc ] = useState()

//     // const notesInitial=[]
//     // const [notes, setNotes]=useState(notesInitial)
 
//     // // const navigate = useNavigate()
//     // // axios.defaults.withCredentials = true;
//     useEffect(()=> {
//         axios.get('http://localhost:3001/homex')
//         .then(res => {
//             console.log("Homex: ");
           
           
//             setSuc(res.data);
           
//         }).catch(err => console.log(err))
//     }, [])

//     // const [users, setUsers] = useState([]);
//     // useEffect(() => {
//     //     fetch('http://localhost:3001/homex')
//     //         .then(res => res.json())
//     //         .then(data => setUsers(data))
//     // }, []);


//     return ( 
//         <div>
//             <h2>Homex</h2>
//             {/* <span className="logged-in-as">Logged in as: {username}</span> */}
//             <p>{suc}</p>
//             {/* <p>{res.data.role}</p> */}



//             {/* <div>
//             <h1 className="text-4xl text-center my-10">
//                 Dynamic Data in Table
//             </h1>
//             <div>
//                 <div className="overflow-x-auto">
//                     <table className="table w-full">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Name</th>
                               
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 users.map(users =>
//                                     <tr>
//                                         <th>{users}</th>                                       
//                                     </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div> */}


//             {/* <div notes={notes}>
//                 {notesInitial[0]}
//             </div> */}
           
//         </div>

//      );
// }

// export default Homex;

import {useEffect, useState } from 'react'

import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Homex() {
 
    const [users,setUsers]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:3001/homex')
      .then(users=> setUsers(users.data))
      .catch(err=> console.log(err))
    },[])



  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">

     
      <table className="table">
        <thead>
          <tr>
            <th>
              name
            </th>
            <th>
              Email
            </th>
            <th>
              age
            </th>
          </tr>
        </thead>

        <tbody>
          {
            users.map(user=>{
              return <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>10</td>

              </tr>
            })
          }
        </tbody>
      </table>
      </div>

          


    </div>
  )
}

export default Homex
