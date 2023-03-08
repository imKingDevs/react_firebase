import React from 'react'
import { useState } from 'react'

const Contacts = () => {

    const [userData, setuserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    })

    let name, value;
    const getUserData = (event) => {
        name = event.target.name
        value = event.target.value

        setuserData({...userData, [name]: value})
    }
    
    const postData = async (e) => {
        e.preventDefault()
        
        let {firstName, lastName, phone, email, address, message} = userData;
    
        if (firstName && lastName && phone && email && address){
            const res = await fetch(`https://fireact-website-default-rtdb.firebaseio.com/userdata.json`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phone,
                    email,
                    address,
                    message,
                })
            });

            if (res) {
                setuserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                })
            }
            
        } else {
            alert("Please Fill All Data")
        }
    }

    return (
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="contact-leftside col-12 col-lg-5">
                                <h1 className="main-heading fw-bold">
                                    Connect With Our <br /> Sales Team.
                                </h1>
                                <p className="main-hero-para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Deserunt eaque alias similique.
                                </p>
                                <figure>
                                    <img
                                        src="./images/hero1.jpg"
                                        alt="contatUsImg"
                                        className="img-fluid"
                                    />
                                </figure>
                            </div>

                            {/* right side contact form  */}
                            <div className="contact-rightside col-12 col-lg-7">
                                <form method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="firstName" id="" className="form-control" placeholder="First Name"
                                            value={userData.firstName} onChange={getUserData} />
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="lastName" id="" className="form-control" placeholder="Last Name"
                                            value={userData.lastName} onChange={getUserData} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="phone" id="" className="form-control" placeholder="Phone Number "
                                            value={userData.phone} onChange={getUserData} />
                                        </div>
                                        <div className="col-12 col-lg-6 contact-input-feild">
                                            <input type="text" name="email" id="" className="form-control" placeholder="Email ID"
                                            value={userData.email} onChange={getUserData} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 contact-input-feild">
                                            <input type="text" name="address" id="" className="form-control" placeholder="Add Address"
                                            value={userData.address} onChange={getUserData} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 ">
                                            <input type="text" name="message" id="" className="form-control" placeholder="Enter Your Message"
                                            value={userData.message} onChange={getUserData} />
                                        </div>
                                    </div>
                                    <div className="form-check form-checkbox-style">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" required />
                                        <label className="form-check-label main-hero-para">
                                            I agree that the thapatechnicalpay may contact me at the email address or phone number above
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-style w-100" 
                                    onClick={postData} >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts