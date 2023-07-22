import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () => {
    return (
        <>
            <div className="about my-3">
                <h3 className="text-center">Service Page</h3>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-2">
                            {
                                Sdata.map((value, index) => {
                                    return <Card key={index} imgsrc={value.imgsrc} title={value.title} descript={value.description} />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Service