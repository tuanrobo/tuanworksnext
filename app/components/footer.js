// import { Link } from "react-router-dom";

export default function Footer() {
    return (<>


        <div className="col-lg-2 text-center  text-white text-opacity-50 offset-lg-1">
            or connect me via:
        </div>
        <div className="col-lg-5 text-center">
            <div className="row d-flex justify-content-around">
                {/* <h6 className="mb-3">My Network, freelance workspace, and playground</h6> */}
                <div className="col-lg-2 col-md-6">
                    <a href={`https://www.linkedin.com/in/tuanrobo/`} target={"_blank"} rel="noreferrer" className="text-decoration-none">
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="col-lg-2 col-md-6">
                    <a href={`https://www.freelancer.com/u/tuanrobo`} target={"_blank"} rel="noreferrer" className="text-decoration-none">
                        <span>Freelancer</span>
                    </a>
                </div>
                <div className="col-lg-2 col-md-6">
                    <a href={`https://99designs.com/profiles/tuanrobo`} target={"_blank"} rel="noreferrer" className="text-decoration-none">
                        <span>99designs</span>
                    </a>
                </div>
                <div className="col-lg-2 col-md-6">
                    <a href={`https://codepen.io/tuanrobo`} target={"_blank"} rel="noreferrer" className="text-decoration-none">
                        <span>Codepen</span>
                    </a>
                </div>
                <div className="col-lg-2 col-md-6">
                    <a href={`https://github.com/tuanrobo`} target={"_blank"} rel="noreferrer" className="text-decoration-none">
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="col-lg-1 text-center order-lg-first">
            <p className="text-white text-opacity-25 m-0">©2023</p>
        </div>

    </>
    )
}