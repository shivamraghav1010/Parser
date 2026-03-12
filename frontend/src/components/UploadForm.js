import React, { useState } from "react";
import axios from "axios";

function UploadForm({ setResult }) {

const [file, setFile] = useState(null);
const [jd, setJd] = useState("");

const handleSubmit = async (e) => {

e.preventDefault();

const formData = new FormData();
formData.append("resume", file);
formData.append("jd", jd);

try {

const res = await axios.post(
// "http://localhost:5000/match",
"https://parser-h9wo.onrender.com/match",
formData
);

console.log(res.data);   // IMPORTANT (debug)

setResult(res.data);

} catch (err) {
console.error(err);
}

};

return (

<div>

<form onSubmit={handleSubmit}>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<br/><br/>

<textarea
placeholder="Paste Job Description"
value={jd}
onChange={(e)=>setJd(e.target.value)}
rows="8"
cols="50"
/>

<br/><br/>

<button type="submit">
Match
</button>

</form>

</div>

);

}

export default UploadForm;