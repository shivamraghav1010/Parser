import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import Result from "./components/Result";

function App() {

const [result, setResult] = useState(null);

return (

<div style={{padding:"40px"}}>

<h1>Resume Job Matcher</h1>

<UploadForm setResult={setResult} />

<Result result={result} />

</div>

);

}

export default App;