import React from 'react';
export function MyModules() {

    return (
        <div className="Auth-form-container">
        <form className="Auth-form">
           <div>
               <h3 className="Auth-form-title" >Here Are All The Modules You Started </h3>
           </div>
           <div className="Auth-form-content">
           <div className="d-grid gap-2 mt-3">
               <button className="btn btn-primary" type="button" >
               Methods and Techniques1
               </button>
           </div>
           <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" type="button" >
                Methods and Techniques2 
                </button>
           </div>
           </div>
         </form>
       </div>
    )
}