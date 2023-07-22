import React from 'react';
import { NavLink } from 'react-router-dom';
const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex justify-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <h2 className="mt-5">
                                {props.name} 
                                <strong className="text">Execellence Company</strong>
                                </h2>
                                <h3 className="my-3">We are the talented team developer to develop webite</h3>
                                <NavLink to={props.visit} class="btn btn-outline-primary mb-2">{props.btname}</NavLink>
                            </div>
                            <div className="col-md-6 img-fluid mt-5">
                                <img src={props.imgsrc} className="animated" alt="img"  height="100%" width="100%"/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            </section>
        </>)
}
export default Common