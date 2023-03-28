'use client'

import PageTitle from "../components/pageTitle";
import { Skills, Experiences, Education, DayQuote } from "../api/data"


import { format } from 'date-fns'
import Experience from "./experience";
import { useCallback, useEffect, useState } from "react";


export default function Main() {
    const [dayQuote, setDayQuote] = useState([])

    useEffect(() => {
        setDayQuote(DayQuote)
    }, [])

    const currentTime = format(new Date(), 'EEEE')

    console.log(currentTime)

    // eslint-disable-next-line default-case


    const renderContent = useCallback(() => {
        switch (currentTime) {
            case 'monday':
                return "I know Monday shouldn't come. But I would like thank you for spending time on my site"
            case 'Tuesday':
                return "Give it your all! Only three more days till you can relax, and don't forget to visit my dull website.";
            case 'Wednesday':
                return 'There are more myths about Black Wednesday than the Greeks ever created.';
            case 'Thursday':
                return 'Thursday';
            case 'Friday':
                return "It's Friday, you are here and made my day comes beautiful!";
            case 'Saturday':
                return 'Saturday';
            case 'Sunday':
                return 'Sunday';
            default:
                return 'ONE';
        }
    }, [currentTime]);

    // const filteredDay = dayQuote.filter((day) => day.day.some(c=>c.day === currentTime))
    // console.log('dsadsa',filteredDay)
    return (<>
        <PageTitle title='tuan.works' />
        <div className='row introduce py-5'>
            <div className="col-lg-6 mt-lg-2 offset-lg-3 order-lg-first text-center">

                <p className="display-4 lh-base mb-3">{renderContent()}</p>

                <p className="lead lh-base">I am always happy to meet for coffee. Feel free to <a href="mailto:tuanrobo@gmail.com">Say hellooo!</a></p>
            </div>
        </div>      
    </>
    )
}