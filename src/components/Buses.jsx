import { Component } from "react";
import './Buses.css';

class Buses extends Component{
    
    render(){
        const p1=[1,2,3,4,5,6,7,8]
        return(<div className="scroll">{p1.map(p=>{
        return(
<div className="busListingContainer">
    <div className="busCardContainer " id="card">
        <div className="busCard" id="bus_39_MMTCC1159_MMTCC1184_16-08-2023_1000001646109942764">
            <div className="makeFlex">
                <div className="makeFlex column appendBottom22 busInfo">
                    <p className="makeFlex hrtlCenter appendBottom8 latoBold blackText appendRight15">SPS Travels</p>
                    <p className="makeFlex hrtlCenter secondaryTxt nowrapStyle">A/c sleeper (2+1)</p>
                </div>

                <div className="makeFlex row appendBottom20 alignSelfStart hrtlCenter">
                    <div>
                        <span className="font18 latoBlack blackText appendRight4">20:40</span>
                        <span className="font14 secondaryTxt capText">16 Aug</span>
                    </div>

                    <div className="line-border-top"></div>

                    <div className="font14 secondaryTxt">
                        <span>09</span>hrs <span>55</span>mins
                    </div>

                    <div className="line-border-top"></div>

                    <div>
                        <span className="font18 blackText appendRight4 latoRegular">06:35</span>
                        <span className="font14 secondaryTxt capText">17 Aug</span>
                    </div>
                </div>
                
                <div className="priceSection">
                    <div className="makeFlex column end">
                        <div className="makeFlex appendBottom8">
                            <div className="makeFlex">
                                <span className="oldPrice" id="old_price">₹810</span>
                                </div>
                                <span placeholder="true" className="sc-ckVGcZ kafEbu" id="price">&nbsp;733</span>
                            </div>

                            <span className="savedAmount">Save <span className="latoBold">₹66</span></span>
                    </div>
                </div>
            </div>
            
            <div className="makeFlex spaceBetween">
                <ul className="busFacility makeFlex hrtlCenter">
                    <li className="appendRight10">
                        <span className="sc-kgoBCf ezyJCX">
                            <span className="listingSprite starIcon appendRight4"></span>
                            <span className="appendRight16 sc-kGXeez bfoMHl">4.6</span>
                        </span>
                    </li>

                    <li className="appendRight16">
                        <div className="font12 secondaryTxt">1568 Ratings</div>
                    </li>

                    <li className="appendRight16 secondaryTxt font12 makeFlex hrtlCenter">
                        <span className="listingSprite liveTrackingIcon appendRight16">
                            </span>Live Tracking
                    </li>

                </ul>
                
                <div className="makeFlex hrtlCenter secondaryTxt font12">
                        <ul className="sc-fjdhpX fXgCif">29 Seats Left</ul>
                </div>
            </div>

        </div>
        
        <div className="busCardFooter makeFlex spaceBetween ">
            <ul className="makeFlex hrtlCenter font12 noSelection">
                <li className="detailHeader ">
                    <span className="appendRight10">Policies</span>
                    <span className=" appendRight10 listingSprite downArrowSmallIcon"></span>
                </li>

                <li className="detailHeader ">
                    <span className="appendRight10">Photos</span>
                    <span className="appendRight10 listingSprite downArrowSmallIcon"></span>
                </li>

                <li className="detailHeader ">
                    <span className="appendRight10">Amenities</span>
                    <span className="appendRight10 listingSprite downArrowSmallIcon"></span>
                </li>

                <li className="detailHeader ">
                    <span className="appendRight10">Pickups &amp; Drops</span>
                    <span className="appendRight10 listingSprite downArrowSmallIcon"></span>
                </li>

                <li className="detailHeader ">
                    <span className="appendRight10">Reviews</span>
                    <span className="appendRight10 listingSprite downArrowSmallIcon"></span>
                </li>

            </ul>
            
            <div className="sc-jKJlTe dYVKVa" data-test-id="select-seats">Select Seats</div>
                    
        </div>

    </div>
    </div>
        ) 
    })  }</div>)
    }
}

export default Buses;