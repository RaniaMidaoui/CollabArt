import * as React from 'react';
import {useNavigate} from 'react-router-dom';

export function Learn() {
    const navigate = useNavigate();

const AllSubjects = () => {
    navigate('/allsubjects');
  }
const MyCourses = () => {
    navigate('/mycourses');
}
const MyModules = () => {
    navigate('/mymodules');
};
  return (
    <>   <div className="Auth-form-container">
         <form className="Auth-form">
            <div>
                <h3 className="Auth-form-title" >You will find here all what you need to learn </h3>
            </div>
            <div className="Auth-form-content">
            <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" type="button" onClick={AllSubjects}>
                View All Subjects Available
                </button>
            </div>
            <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" type="button" onClick={MyCourses}>
            My Courses 
            </button>
            </div>
            <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" type="button" onClick={MyModules}>
                My Modules
            </button>
            </div>
            </div>
          </form>
        </div>
        </>
  );
}