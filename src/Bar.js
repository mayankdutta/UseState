import React , {useState} from 'react';
import './Bar.css'
const Bar = () =>{
   
    const [curroperations ,SetCurrOperations] = useState('open');
    
    const animations = [
        {
          marginLeft : "-50cm",
          backgroundColor: "rgb(233, 106, 131)",
          height: "15cm",
          width : "10cm",
          fontSize : "30px",
          fontFamily : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        },
        {
            marginLeft : "0cm",
            backgroundColor: "rgb(233, 106, 131)",
          height: "15cm",
          width : "10cm",
          fontSize : "30px",
          fontFamily : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }
    ];
    const [currAnimation , setCurrAnimation] = useState(animations[0]);



    const change = () =>{
        if (curroperations === 'open'){
            SetCurrOperations('close');
            setCurrAnimation(animations[1]);
        }
        else{
            SetCurrOperations('open');
            setCurrAnimation(animations[0]);
        }
    }
    return (
        <>
        <button onClick={change} className="btn">{curroperations}</button>
        <div style={currAnimation}>
           <ol>
               <li> codeforces </li>
               <li> leetcode </li>
               <li> codechef </li>
               <li> atcoder </li>
               <li> hackerrank </li>
           </ol>
        </div>
        </>
    );
}

export default Bar;