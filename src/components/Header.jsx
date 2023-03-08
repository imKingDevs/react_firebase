import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className='container main-hero-container'>
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex flex-column justify-content-center align-items-start">
                            <h1 className="display-2">Coding is as Easy as Telling a story.</h1>
                            <p className='main-hero-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae fuga tempore in, ducimus incidunt distinctio rerum, quia odit explicabo voluptatem maxime voluptates illo, earum debitis eos provident quidem voluptatum delectus.</p>
                            <h3>Let's Start your journey</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text" placeholder="Enter Your Email" />
                                <div className="input-group-button">Get it now</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src="./images/hero1.jpg" className='img-fluid' alt="Hero_Image" />
                            <img src="./images/hero4.jpg" className='img-fluid main-hero-img2' alt="Hero_Image" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header