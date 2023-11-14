import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";

function Addclubmem() {




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

    const [file,setFile]=useState()
    const[name,setName]=useState()
    const[description,setDesc]=useState()
    const handleUpload=(e)=>{

      const formdata=new FormData()
      formdata.append('file',file)
      formdata.append('name',name)
      formdata.append('description',description)
      axios.post('http://localhost:3001/uploadclubmem',formdata)
      .then(res=> {console.log(res) 
        window.location.reload()
      })
      .catch(err=>console.log(err))
    }


    const[images,setImage]=useState([])

    useEffect(()=>{

      axios.get('http://localhost:3001/getclubmem')
      .then(images=> setImage(images.data))
      .catch(err=>console.log(err))

    },[])


    const handleDelete=(id) =>{
      axios.delete("http://localhost:3001/deleteclubmem/"+id)
      .then(res => {console.log(res)
          window.location.reload()
      })
      .catch(err=>console.log(err))
  }

    return ( 
        <div>
            <h2>ADD CLUB MEMBERS</h2>
            {/* <span class="logged-in-as">Logged in as: {username}</span> */}
            <p>{suc}</p>
            {/* <p>{res.data.role}</p> */}
            
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            <input type="file" onChange={e=> setFile(e.target.files[0])} />


<input
              type="text"
              placeholder="Enter desc"
              className="form-control"
              onChange={(e) => setDesc(e.target.value)}
            />
<button onClick ={handleUpload}>Upload</button>
           
<div>
{
            images.map(image=>{
              return <div>
                  <h1>{image.name}</h1>
                  <button className="btn btn-danger" onClick={(e)=>handleDelete(image._id)}>DELETE </button>
                  
              </div>
               
                
              
            })
          }
</div>




        </div>

     );
}

export default Addclubmem;