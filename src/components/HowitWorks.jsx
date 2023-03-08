import React from 'react'
import { useState } from 'react'
import workApi from '../API/workApi'

const HowitWorks = () => {

    const [workData, setworkData] = useState(workApi)

    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className='main-heading text-center'>How it does works</h1>
                    <div className="row">
                        {workData.map((element, index) => {
                            return (
                                <div key={index} className="col-12 col-lg-4 text-center work-container-subdiv">
                                    <i className={`${element.logo} fontawesome-style`}></i>
                                    <h2 className='sub-heading'>{element.title}</h2>
                                    <p className='main-hero-para'>{element.info}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowitWorks