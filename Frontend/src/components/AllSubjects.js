import React from 'react';
export function AllSubjects() {

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div>
                    <h3 className="Auth-form-title"> Here Are All The Subjects Available in CollabArt </h3>
                </div>
                <div className="Auth-form-content">
                    <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" type="button" >
                             Pottery
                            </button>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" type="button" >
                            Design
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}