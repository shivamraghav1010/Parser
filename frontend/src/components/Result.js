import React from "react";

function Result({ result }) {

if (!result) return null;

return (

<div style={{marginTop:"30px"}}>

<h2>Matching Result</h2>

<pre style={{
background:"#f4f4f4",
padding:"20px",
borderRadius:"8px"
}}>

{JSON.stringify(result, null, 2)}

</pre>

</div>

);

}

export default Result;