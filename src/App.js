import { useState } from "react";
import './styles/App.css';
import Contact from './components/contact.jsx';
import Education from './components/education.jsx';
import Pratical from './components/pratical.jsx';
import CV from './components/CV.jsx';

function App() {
  const[name, setName] = useState('Name');
  const[email, setEmail] = useState('Email');
  const[phone, setPhone] = useState('Phone');
  const[contactStatus, setContact] = useState('pending');

  const[schoolName, setSchoolName] = useState('School Name');
  const[title, setTitle] = useState('Title');
  const[year, setYear] = useState('Year of Completion');
  const[edStatus, setEd] = useState('pending');

  const[companyName, setCompanyName] = useState('Company Name');
  const[positionTitle, setPositionTitle] = useState('Position Title');
  const[startYear, setStartYear] = useState('Start Year');
  const[pratStatus, setPrat] = useState('pending');

  // contact
  const setNameChange = (value) => {setName(value);}
  const setEmailChange = (value) => {setEmail(value);}
  const setPhoneChange = (value) => {setPhone(value);}
  const submitSetter= () =>   {
    if(contactStatus == 'pending'){setContact('submitted');}
    else if(contactStatus == 'submitted'){setContact('edit')}
    else if(contactStatus == 'edit'){setContact('submitted')}
  };

  // education
  const setSchoolNameChange = (value) => {setSchoolName(value);}
  const setTitleChange = (value) => {setTitle(value);}
  const setYearChange = (value) => {setYear(value);}
  const submitEdSetter= () =>   {
    if(edStatus == 'pending'){setEd('submitted');}
    else if(edStatus == 'submitted'){setEd('edit')}
    else if(edStatus == 'edit'){setEd('submitted')}
  };

  // pratical
  const setCompanyNameChange = (value) => {setCompanyName(value);}
  const setPositionTitleChange = (value) => {setPositionTitle(value);}
  const setStarYearChange = (value) => {setStartYear(value);}
  const submitPratSetter= () =>   {
    if(pratStatus == 'pending'){setPrat('submitted');}
    else if(pratStatus == 'submitted'){setPrat('edit')}
    else if(pratStatus == 'edit'){setPrat('submitted')}
  };

  return (
    <>
    <nav>
      <h1>CV Application</h1>
    </nav>
    <main>
      <section className="forms">
      <Contact 
        nameStateFunction={setNameChange} 
        emailStateFunction={setEmailChange}
        phoneStateFunction={setPhoneChange}
        status={contactStatus}
        submitSetter = {submitSetter}
      />
      <Education 
        schoolStateFunction={setSchoolNameChange} 
        titleStateFunction={setTitleChange}
        yearStateFunction={setYearChange}
        status={edStatus}
        submitEdSetter = {submitEdSetter}
      />
      <Pratical 
        companyNameStateFunction={setCompanyNameChange} 
        positionTitleStateFunction={setPositionTitleChange}
        startYearStateFunction={setStarYearChange}
        status={pratStatus}
        submitPratSetter = {submitPratSetter}
      />
      </section>
        <aside>
        <CV name={name} email={email} phone={phone} school={schoolName} title={title} year={year} company={companyName} positionTitle={positionTitle} startYear={startYear} />
      </aside>
    </main>
    </>);
}

export default App;
