import React from 'react';


const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="img" height="300" width="300" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title }</h5>
                        <p className="card-text">{props.descript }</p>
                        <button type="button" class="btn btn-outline-primary">Primary</button>
                    </div>
                </div>
            </div>



        </>)
};

export default Card