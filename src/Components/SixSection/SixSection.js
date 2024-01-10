import React, { Fragment } from 'react'

const SixSection = () => {
return (
    <Fragment>
        <section className="fifth-highlight-wrapper">
        <div className="left-side-wrapper5">
        <div className="content3">
            <div>
                        <img src={require("../Image/icons/trade-In.png")} alt="" />
            </div>
            <div className="description6">Get $200-650 in credit when your trade in iPhone 11 or higher.</div>
            <div className="link-wrapper">
            <ul>
                <li><a href="#">See what your device is worth</a></li>
            </ul>
            <div className="fifth-highlight-wrapper"></div>
            </div>
        </div>
        </div>
        <div className="right-side-wrapper5">
        <div className="content4">
                    <img src={require("../Image/icons/card-logo.png")} alt="" />
            <div className="text2">
            Get up to 3% Daily Cash back with every purchase.
            <div className="link-wrapper">
                <ul>
                <li><a href="#">Learn more</a></li>
                <li><a href="#">Apply now</a></li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </section>
    <br/>
    <br/>
    <br/>
    <br/>   
    </Fragment>
)
}

export default SixSection