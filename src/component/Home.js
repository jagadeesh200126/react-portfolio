import React from "react";

function Home(props) {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <NavLink to={`/`} className="btn-outline-secondary">Contact</NavLink>
            </div>
        </div>
    </div>
    )
}
export default Home