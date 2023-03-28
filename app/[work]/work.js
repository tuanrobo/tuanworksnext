'use client'

import Image from "next/image"
import Link from "next/link"

export default function Works({ title, imageSrc, id, tag }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (<>

        <div className="col">
            <div className="card h-100 border-0 p-2 bg-primary bg-opacity-10">
                <Link href={`/${id}`} aria-current="true" rel="noreferrer">                    
                    <Image src={imagePath + imageSrc} className="card-img-top rounded-2 img-fluid" alt="..." width={1000} height={500}/>
                </Link>
                <div className="card-body">
                    <Link href={`/${id}`} aria-current="true" rel="noreferrer" className="text-decoration-none">
                        <h5 className="card-title text-primary">{title}</h5>
                    </Link>
                    <div className="grid gap-0 row-gap-3 mb-3">
                        {tag.map((y, i) => {
                            return <>
                                <small key={i} className="mx-1 badge rounded-pill border border-white text-white text-opacity-25 border-opacity-10 fw-normal">
                                    {y}
                                </small>
                            </>
                        })
                        }
                    </div>
                    {/* {parse(x.shortText)} */}
                </div>
            </div>
        </div>
    </>
    )
}