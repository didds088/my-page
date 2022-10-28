import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Home =()=> {
  	const [ fname, setfname] = useState("");
  	const [ pword, setpword] = useState("");
     const navigate = useNavigate();

      const submitF = (event) => {     	
      	event.preventDefault();
	      navigate("/About");
          }
          
      return (
      <div className="container center-page ps-4 pe-4"> 
    <h1 class="text-center"> Welcome! </h1>
    <p class="text-center">Login to start quiz </p>
    <form onSubmit={submitF}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input 
		type="email" 
		class="form-control" 
		id="exampleInputEmail1" 
		aria-describedby="emailHelp"
		value={fname}
        onChange= {(e) => setfname(e.target.value)}
		/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input 
		type="password" 
		class="form-control" 
		id="exampleInputPassword1"
		value={pword}
		onChange= {(e) => setpword(e.target.value)}
	/>
  </div>
  
  <button type="submit" class="btn btn-primary float-end">Submit</button>
</form>
    
    </div>
    )}
export default Home;
