import { useState } from "react";

function Pratical({companyNameStateFunction, positionTitleStateFunction,
   startYearStateFunction, status, submitPratSetter}){
  
    const[companyName, setCompanyName] = useState('');
    const[positionTitle, setPositionTitle] = useState('');
    const[startYear, setstartYear] = useState('');

  const handleCompanyNameChange = (e) => {setCompanyName(e.target.value);}
  const handlePositionTitleChange = (e) => {setPositionTitle(e.target.value);}
  const handlestartYearChange = (e) => {setstartYear(e.target.value);}

  const handleSubmit = (e) => {
    e.preventDefault();
    companyNameStateFunction(companyName);
    positionTitleStateFunction(positionTitle);
    startYearStateFunction(startYear);
    submitPratSetter();
  }

  return(
  <form onSubmit={handleSubmit}>
    <legend>Pratical Experience</legend>
    {(status == 'pending' || status == 'edit') && <>
    <label>Company Name</label>
    <input key='companyName' type="text" value = {companyName} required onChange={handleCompanyNameChange} />
    <label>Position Title</label>
    <input key='positionTitle' type="text" value ={positionTitle}  required onChange={handlePositionTitleChange} />
    <label>Start Year</label>
    <input key='startYear' type="year" value = {startYear} required onChange={handlestartYearChange}/>
    <div>
      <button>Submit</button>
    </div>
    </>}
    {(status == 'submitted') && <div><button >Edit
      </button></div>}
  </form>);
}

export default Pratical;