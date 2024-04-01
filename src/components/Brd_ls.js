/* https://onethejay.tistory.com/194  */


import { useState, useEffect } from "react";
const Brdls = () => {
    const [brdls, setBrdLs] = useState([]);
    
    useEffect(
        ()=>{
        fetch("../react_db/query.php",{
            method : "GET"
        })
            .then( res => res.json())
            .then( res => {
                console.log("res =>", res.json_data_ls);
                setBrdLs(res.json_data_ls);

                const pgset = res.pagenation;
                console.log("pgset =>", pgset);
            })
        },[brdls]
    )


    return(
        <artice>
            <div className="art_area">
                <div className="art_head">
                    <h3>게시판 리스트aaaa</h3>
                </div>
                <div className="art_body">
                    {brdls.map(x => <li key={x.no}>{x.no} {x.tit}</li>)}
                </div>
            </div>
        </artice>
    );
}

export default Brdls;

