import { Fragment } from "react"

export default function Experience({ Exp, Edu, Skills }) {
    return <>

        <div className='row experience  mb-5'>
            <h3 className="mb-4">Work Experience</h3>
            <div className="col-lg-12">
                {/* <hr className="border border-primary border-1 opacity-75" /> */}
                <dl className="row">
                    {Exp.map((value, i) => {
                        return <Fragment key={i}>
                            <dt className="col-lg-2">
                                <small className="opacity-50">{Object.keys(value)}</small>
                            </dt>
                            <dd className="col-lg-9">
                                <h6>{Object.values(value)[0].company}</h6>
                                <p>{Object.values(value)[0].role}</p>
                                <p className="text-white opacity-50">{Object.values(value)[0].description}</p>
                            </dd>
                        </Fragment>
                    })}
                </dl>
            </div>
        </div>

        <div className='row awards mb-5'>
            <h3 className="mb-4">Award</h3>
            <div className="col-lg-12">
                <dl className="row">
                    <dt className="col-lg-2">
                        <small className="opacity-50">2003</small>
                    </dt>
                    <dd className="col-lg-9">
                        <p>First award from Cocacola contest for designning Sprite can cover</p>
                    </dd>
                </dl>
            </div>
        </div>
        <div className='row awards mb-5'>            
            <h3 className="mb-4">Education</h3>            
            <div className="col-lg-12">
                <dl className="row">
                    {Edu.map((value, i) => {
                        return <Fragment key={i}>
                            <dt className="col-lg-2">
                                <small className="opacity-50">{Object.keys(value)}</small>
                            </dt>
                            <dd className="col-lg-9">
                                <h6>{Object.values(value)[0].school}</h6>
                                <p className="text-white opacity-50">{Object.values(value)[0].description}</p>
                            </dd>
                        </Fragment>
                    })}

                </dl>
            </div>
        </div>

        <div className='row skills mb-5'>            
            <h3 className="mb-4">Skills</h3>            
            <div className="col-lg-12">                
                <div className="row">
                    {Skills.map((value, i) => {
                        return <Fragment key={i}>
                            <div className="col-6">
                                <h4>{Object.keys(value)}</h4>
                                <ul className="list-group list-unstyled mb-5">
                                    {Object.values(value)[0].map((x, i) => {
                                        return <Fragment key={i}>
                                            <li className="text-white opacity-50">{x.name}</li>
                                        </Fragment>
                                    })}
                                </ul>
                            </div>
                        </Fragment>
                    })}
                </div>
            </div>
        </div>
    </>
} 