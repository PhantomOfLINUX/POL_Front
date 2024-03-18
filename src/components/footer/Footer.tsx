import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>For business</h4>
                        <a href="/">
                            <p>Employer</p>
                        </a>
                        <a href="/">
                            <p>Health Plan</p>
                        </a>
                        <a href="/">
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Resource</h4>
                        <a href="/">
                            <p>Resource center</p>
                        </a>
                        <a href="/">
                            <p>Test emotion</p>
                        </a>
                        <a href="/">
                            <p>STV MBT</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Partner</h4>
                        <a href="/">
                            <p>swing bat</p>
                        </a>
                        <a href="/">
                            <p>im ironman</p>
                        </a>
                        <a href="/">
                            <p>김정래 코딩학원</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Map</h4>
                        <a href="/">
                            <p>mirage</p>
                        </a>
                        <a href="/">
                            <p>inferno</p>
                        </a>
                        <a href="/">
                            <p>overpass</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>comming soon</h4>
                        <div className="socialmedia">

                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>@{new Date().getFullYear()} CodeInn. All right reserved</p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/"><div><p>Terms & conditional</p></div></a>
                        <a href="/"><div><p>Privacy</p></div></a>
                        <a href="/"><div><p>Security</p></div></a>
                        <a href="/"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer

                            /*<p><img src="{fb}" alt="" /></p>
                            <p><img src="{twitter}" alt="" /></p>
                            <p><img src="{linkedin}" alt="" /></p>
                            <p><img src="{insta}" alt="" /></p>*/