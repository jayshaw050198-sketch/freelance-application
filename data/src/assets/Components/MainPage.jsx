import "./MainPage.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const employees = [
  {
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=52",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=48",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=65",
  },
  {
    avatar: "https://i.pravatar.cc/150?img=24",
  },
];

export default function MainPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [MainData , setMainData] = useState([])

  
const handel = () =>{

  const dataa = location.state?.data;
  console.log(Array.isArray(MainData))
 
  useEffect(() => {
    if(dataa){
        handel()
        console.log(dataa);
        setData(dataa)
        setMainData(data)

    }
  }, [dataa])


}


  
  
  return (
    <div className="container">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <header>
        <h1>Employee Dashboard</h1>
        <p>Client Management Portal</p>
        <h1>{MainData.email}</h1>
      </header>

      <div className="grid">
        {/* {MainData.map(function(elem , index){
            return <div key={index} className="card">
                <h2>hi</h2>
            </div>

        })} */}
      </div>
    </div>
  );
}
