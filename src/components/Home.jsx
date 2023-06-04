import { Link } from "react-router-dom";



const Home = () => {
  return (
   
    <div className="bg-container">
      <div className="col">
      <div className="row">
        <div className="col text-center">
          <img alt="img" src={require("./Images/use.png")} id="im"></img>
        </div>
        <div className="col text-center">
          <img alt="img" src={require("./Images/lead2.jpg")} id="im"></img>
        </div>
        <div className="col text-center">
          <img alt="img" src={require("./Images/adm.jpej.png")} id="im"></img>
        </div>
      </div>

      <div className="row text-center">  
        <div className="col">
          <Link to="user" className="btn btn-gradient  m-3" id="b">
            <b>USER</b>
          </Link>
        </div>
        <div className="col">
          <Link to="leader" className="btn btn-info m-3" id="b">
           <b>LEADER</b> 
          </Link>
        </div>
        <div className="col">
          <Link to="admin" className="btn btn-info m-3 " id="b">
            <b>ADMIN</b>
          </Link>
        </div>
      </div>
      
      
      </div>  
      
      
    </div>
  );
};
export default Home;
