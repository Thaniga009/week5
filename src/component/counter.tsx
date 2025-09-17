import React, { useState }  from "react";

interface Counter{
    initialCount?:number;
}

const Counter:React.FC<Counter>=({initialCount=0})=>{
    const[count,setCount] = useState<number>(initialCount);
    
     const increment =() =>{
        setCount(prevCount=>prevCount+1);
    }
    const decrement =()=> {
        setCount (count-1);
    }
    const handleClear = () => {
        setCount (0);
    }

    return(
        <div style={{padding:'20px',textAlign:'center'}}>
            <h2>Counter Exercise-Solution</h2>
            <h1 style={{color:"#3fd5f7ff"}}>{count}</h1>
            <div style={{margin:'20px',textAlign:'center'}} >
                 <button type="button" style={{backgroundColor:"red",margin:'10px',color:"white"}} onClick={increment}>+เพิ่ม</button>
                 <button type="button" style={{backgroundColor:"#27b51dff",margin:'10px',color:"white" }}onClick={decrement}>-ลด</button>
                 <button type="button" style={{backgroundColor:"#f08234ff",margin:'10px',color:"white" }}onClick={handleClear}>🔁Reset</button>
            </div>
        </div>
    );
};

export default Counter;