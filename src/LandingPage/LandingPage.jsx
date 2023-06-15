/* eslint-disable react-hooks/exhaustive-deps */
import "./LandingPage.css";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
// import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const history = useHistory()
  let verifyLogin = localStorage.getItem("user-info");

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get(
          "https://64670f90ba7110b663ae7915.mockapi.io/users"
        );
        setUsers(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI()
  }, []);


   useEffect(() => {
    const verifyLogin = localStorage.getItem("user-info")
    if (verifyLogin) {
      navigate("/home");
    }
    




    
   },[])

 
  

  return (
    <>
      <header>
        <Jumbotron />
      </header>
      <main>
        <About />
        <Services />
        <FAQ />
      </main>
    </>
  );
};

export default LandingPage;
