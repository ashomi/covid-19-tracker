import React,{useEffect,useState} from 'react';
import './statewise.css';


const Statewise = () => {
       const[Data, setData] = useState([]);
     const GetCovidData = async() =>{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actuallData = await res.json()
            console.log(actuallData.statewise);
            setData(actuallData.statewise)
          }

        useEffect(() => {
            GetCovidData();
              
        }, [])  
       return (
              <>
                
                 <div className="contianer-fluid mt-5">
                        <div className="main-heading">
                        <h1 className="mb-5 text-center"> <span style={{fontWeight:'bold'}}>INDIA</span> Covid 19 Tracker Dashboard</h1>
                        </div>
                         <div className="table-responsive">
                                <table className="table table-hover">

                                    <thead className="thead-dark">
                                           <tr>
                                              <th>State</th>
                                              <th>Confirmed</th>
                                              <th>Recovered</th>
                                              <th>Deaths</th>
                                              <th>Active</th>
                                              <th>Update</th>


                                               
                                             
                                            </tr>  
                                             
                                                        
                                        </thead>
                                  
                                  
                                   <tbody>
                                   
                                     {
                                            Data.map((curElem,index)=>{
                                                   return(
                                                        <tr key={index}>
                                                        <th>{curElem.state}</th>
                                                        <td>{curElem.confirmed}</td>
                                                        <td>{curElem.recovered}</td>
                                                        <td>{curElem.deaths}</td>
                                                        <td>{curElem.active}</td>
                                                        <td>{curElem.lastupdatedtime}</td>
          
          
                                                         
                                                       
                                                      </tr>  )
                                            }

                                            )
                                     }     
                                                 
                                      
                                                  
                                                       
                                   </tbody>       
                                                        
                                          </table>    

                      </div>
                 </div>    
              </>
       )
}

export default Statewise;
