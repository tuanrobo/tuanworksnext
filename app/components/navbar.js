import Link from "next/link"

export const Navbar = () => {
    return <>
        <div className="col-3 col-md-2 col-lg-2  col-xl-1 offset-xl-1 text-center mt-5">
            <Link className='nav-link mt-lg-5 fs-4 text-primary border border-primary border-opacity-10 active d-inline-block px-3 py-1 rounded' href={''} aria-current="page" >T<span className="text-white ">.</span>
            </Link>
        </div>

    </>
}