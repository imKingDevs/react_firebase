import React from 'react'
import { useState } from 'react'
import howToUseApp from '../API/howToUse'

const Aboutus = () => {

    const [aboutData, setaboutData] = useState(howToUseApp)

    return (
        <>
            {/* Section 1st */}
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                            <img src="./images/hero3.jpg" alt="About Img" />
                        </div>
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                -- available @google and @ios app store only
                            </h3>
                            <h1 className="main-heading">How to use the app?</h1>
                            {aboutData.map((element, index) => {
                                const {id, title, info} = element;
                                return (
                                    <div key={index} className="row our-services-info" >
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <br />
                            <button className='btn-style btn-style-border'>learn more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2nd */}
            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-7 our-services-list our-services-rightside-content d-flex flex-column align-items-center justify-content-center">
                            <h3 className="mini-title">
                                -- support in any languages
                            </h3>
                            <h1 className="main-heading">World class support is <br /> available 24/7</h1>
                            {aboutData.map((element, index) => {
                                const {id, title, info} = element;
                                return (
                                    <div key={index} className="row our-services-info" >
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <br />
                            <button className='btn-style btn-style-border'>learn more</button>
                        </div>
                        <div className="col-12 col-lg-5 text-center our-services-rightside">
                            <img src="./images/callcenter.jpg" alt="About Img" />
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Aboutus