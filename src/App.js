//import { useState, useEffect } from "react";
import Brdls from "./components/Brd_ls";




function App() {
  // const [brdls, setBrdLs] = useState([]);
  // useEffect(
  //   ()=> {
  //     fetch("../react_db/query.php",{
  //       method : "GET"
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         console.log("res =>", res.json_data_ls);
  //         setBrdLs(res.json_data_ls);

  //         const pngn = res.pagination;
  //         console.log(pngn);
  //      })
  //   },[]
  // )

  return (
    <div className="App">
      
      <Brdls />
      {/* {brdls.map( x =>  <li key={x.no}>{x.no} {x.tit}</li>)} */}
    </div>
  );
}

export default App;




