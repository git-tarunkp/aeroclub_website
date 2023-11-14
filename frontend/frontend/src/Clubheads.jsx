import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function Clubheads() {

 

  const [images, setImage] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/getclubheads')
      .then(images => setImage(images.data))
      .catch(err => console.log(err))

  }, [])

  return (
    <div>

      

      <section className="py-5 header text-center">
        <div className="container py-5 text-white " >
          <header className="py-5">
            <h1 className="display-4">CLUB HEADS</h1>
            <p className="font-italic mb-1">AEROMODELLING CLUB IIT INDORE</p>
            <p className="font-italic">by
              <a className="text-white" >
                TKP
              </a>
            </p>
          </header>
        </div>
      </section>



      <header className="header sticky-top">
        <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
           
        <div className="wrapper">

</div>
<div className="container-fluid all-show">
  <a className="navbar-brand" href="#">TAMC<i className=""></i></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      {/* <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">About us</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href={`/`}>HOME</a>
      </li>

      <li className="nav-item ">
        <a className="nav-link" href="/clubprojects">Projects</a>
      </li>

      {/* <li className="nav-item">
        <a className="nav-link" href="#">club head</a>
      </li> */}

      <li className="nav-item">
        <a className="nav-link" href="#">contact</a>
      </li>




    </ul>
    <div className="d-flex flex-column sim">


      <form className="form-inline my-2 my-lg-0">


        <Link to="/login" className="btn btn-secondary my-2 my-sm-0 ">
          Admin Login
        </Link>
      </form>

    </div>
  </div>
</div>
          
        </nav>

      </header>
      <div>
        {
          images.map(image => {
            return <div>
              {/* <h1>{image.title}</h1>
                  <img className="img-responsive img-rounded mx-auto d-block img-thumbnail" src={"http://localhost:3001/Images/"+image.image} alt=""/>
                 <h1>{image.description}</h1> */}

              <section className=" section-1 seccolor">
                <div className="container py-5 text-center">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <h2>{image.name}</h2>
                      <p className="text-muted lead">{image.description}</p>
                      <img className=" imgmem" src={"http://localhost:3001/Images/" + image.image} alt="" />

                    </div>
                  </div>
                </div>
              </section>



            </div>



          })
        }
      </div>


      <section className="py-5 section-1">
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Demo section 1</h2>
              <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 section-2">
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Demo section 2</h2>
              <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 section-3">
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Demo section 3</h2>
              <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 section-4">
        <div className="container py-5 text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Demo section 4</h2>
              <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-center text-white footers">

        <div className="container p-4 pb-0">

          <section className="mb-4">

            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-facebook-f"></i></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-twitter"></i ></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-google"></i></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-instagram"></i></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-linkedin"></i></a>


            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fa fa-github"></i>
            </a>
          </section>

        </div>

        <div className="text-center p-3" >
          © 2023 Copyright:
          <a className="text-white" >TKP</a>
        </div>

      </footer>
    </div>

  );
}

export default Clubheads;