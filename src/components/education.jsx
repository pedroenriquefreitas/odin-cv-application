import { useState } from "react";

function Education({schoolStateFunction, titleStateFunction,
   yearStateFunction, status, submitEdSetter}){
  
    const[schoolName, setSchoolName] = useState('');
    const[title, setTitle] = useState('');
    const[year, setYear] = useState('');

  const handleSchoolNameChange = (e) => {setSchoolName(e.target.value);}
  const handleTitleChange = (e) => {setTitle(e.target.value);}
  const handleYearChange = (e) => {setYear(e.target.value);}

  const handleSubmit = (e) => {
    e.preventDefault();
    schoolStateFunction(schoolName);
    titleStateFunction(title);
    yearStateFunction(year);
    submitEdSetter();
  }

  return(
  <form onSubmit={handleSubmit}>
    <legend>Education Info</legend>
    {(status == 'pending' || status == 'edit') && <>
    <label>School Name</label>
    <input key='SchoolName' type="text" value = {schoolName} required onChange={handleSchoolNameChange} />
    <label>Title</label>
    <input key='title' type="text" value ={title}  required onChange={handleTitleChange} />
    <label>Year of Completion</label>
    <input key='year' type="number" value = {year} required onChange={handleYearChange}/>
    <div>
      <button>Submit</button>
    </div>
    </>}
    {(status == 'submitted') && <div><button >Edit
      </button></div>}
  </form>);
}

export default Education;