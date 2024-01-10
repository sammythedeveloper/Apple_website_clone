import React from 'react'

const FourthSection = () => {
return (
    <div>
        <section className="third-highlight-wrapper">
        <div className="left-side-wrapper">
        <div className="3left-side-wrapper-internal">
        <div className="Product">MacBook Air 15"</div>
        <div className="Size">Impressively big.Impossibly thin.</div>
        <div className="link-wrapper">
        <ul>
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Buy</a></li>
        </ul>
        </div>
        </div>
        </div>
        <div className="3highlight-leftside-image"></div>
        <div className="right-side-wrapper">
        <div className="Watch-logo">
                    <img src={require("../Image/icons/watch-logo.png")} alt="" />
        </div>
        <div>A healthy leap ahead.</div>
        <div className="link-wrapper">
            <ul>
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Buy</a></li>
            </ul>
        </div>
        <div className="3highlight-rightside-image"></div>
        </div>
    </section>
    </div>
)
}

export default FourthSection