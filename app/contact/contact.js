export default function Contact() {
    return (<>
        <div className="col-lg-4 offset-xl-2 mb-5 mb-lg-0">
            <p className="lead">Thanks for visit</p>
            <h3 className="display-6">If you're interested in my work, let's connect!</h3>
        </div>
        <div className="col-3 col-md-2 col-xl-1 d-flex align-items-center text-center flex-column justify-content-center">
            <a href="./images/resume.pdf" target='_blank' className="d-flex flex-column">
                <i className="bi bi-filetype-pdf fs-1"></i>
                Resume</a>
        </div>
        <div className="col-3 col-md-2 col-xl-1 d-flex align-items-center text-center flex-column justify-content-center">
            <a href="mailTo:tuanrobo@gmail.com" className="d-flex flex-column"><i className="bi bi-envelope-at fs-1"></i>Email</a>
        </div>
        <div className="col-3 col-md-2 col-xl-1 d-flex align-items-center text-center flex-column justify-content-center">
            <a href="tel:+084907319164" className="d-flex flex-column"><i className="bi bi-telephone fs-1"></i>Phone</a>
        </div>
        <div className="col-3 col-md-2 col-xl-1 d-flex align-items-center text-center flex-column justify-content-center">
            <a href="live:tuan_robo" className="d-flex flex-column"><i className="bi bi-skype fs-1"></i>Skype</a>
        </div>
    </>
    )
}