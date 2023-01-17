import React from 'react';
export function MyCourses() {

    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
           <div>
               <h3 className="Auth-form-title" >Here Are All The Courses You Enrolled To </h3>
           </div>
           <div className="Auth-form-content">
           <div className="d-grid gap-2 mt-3">
               <button className="btn btn-primary" type="button" >
               Beginning Pottery
               </button>
           </div>
           <div className="d-grid gap-2 mt-3">
           <button className="btn btn-primary" type="button" >
           Raw Materials 
           </button>
           </div>
           <div className="d-grid gap-2 mt-3">
           <button className="btn btn-primary" type="button">
           Ceramics: problems in design
           </button>
           </div>
           </div>
         </form>
       </div>
    )
}