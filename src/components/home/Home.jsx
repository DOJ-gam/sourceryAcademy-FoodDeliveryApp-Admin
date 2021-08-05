// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import React,{useEffect, useState} from "react";


export default function Home() {
  const[name, setName]= useState('');

  let url = process.env.NODE_ENV === "development"?
        process.env.REACT_APP_DEVELOPMENT_URL : 
        process.env.REACT_APP_PRODUCTION_URL;

        const getUser = async () => {
          let res = await fetch(url + 'Auth/user',{
            headers : {'content-type' : 'application/json'},
            credentials: 'include',
          })
          let content = await res.json();
          setName(content.name);
        } 

  useEffect(()=>{
    getUser();
  },[]);

  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Chart
        data={userData}
        title="Infected People Analytics"
        grid
        dataKey="Active User"
      /> */}
      <div className="homeWidgets">
           {name ? 'hi' + name : 'you are not logged in'}
      </div>
    </div>
  );
}
