import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './A-Wdgs/Style.css';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='bgAbout'>
                {/* <GlobalComponant /> */}
                <nav>
                    <ul>
                        <Link to={"/Home"} id='adm'>Home</Link>
                        <Link to={"/About"} id='adm'>About</Link>
                        <Link to={"/Land"} id='adm'>Land</Link>
                        <Link to={"/Character"} id='adm'>Character</Link>
                        <Link to={"/Pages"} id='adm'>Pages</Link>
                    </ul>
                </nav>
                <div className='addAbout'>
                  <h1>About us</h1>
                  <p>Every Industry Can Benefit From NFT.</p>
                </div>
                <div className="cont1">
                    <div className="info1">
                        <h4>WHO WE ARE</h4>
                        <h1>Explore the space & ready to battle your pet.</h1>
                        <p>Vivamus semper litora sapien tempus viverra natoque erat nibh. Libero habitasse dis iaculis eros magna augue dictumst. Montes nullam vehicula laoreet vestibulum nunc fusce nec risus primis arcu taciti.</p>
                        <input className="btn1" type='button' value={"Buy on opensea"} />
                        <input className="btn1V" type='button' value={"Join Discord "} />
                    </div>
                    <div className="image1">
                        <img className="bordergirl" src="./img/bordergirl.jpg" />
                        <img className="girl" src="./img/Girlislamik.png" />
                    </div>
                </div>
                <div className="cont2">
                    <div className="cart1">
                        <h3>Elmore Planet</h3>
                        <p>Aenean purus consectetur curae imperdiet lobortis ipsum tristique fermentum. Suspendisse imperdiet odio sagittis nam euismod potenti. Euismod ultricies integer neque praesent ex.</p>
                        <input className="btn2" type='button' value={"Read Stories"} />
                    </div>
                    <div className="cart2">
                        <h3>Elcanora Planet</h3>
                        <p>Aenean purus consectetur curae imperdiet lobortis ipsum tristique fermentum. Suspendisse imperdiet odio sagittis nam euismod potenti. Euismod ultricies integer neque praesent ex.</p>
                        <input className="btn2" type='button' value={"Read Stories"} />
                    </div>
                    <div className="cart3">
                        <h3>Elcanora Planet</h3>
                        <p>Aenean purus consectetur curae imperdiet lobortis ipsum tristique fermentum. Suspendisse imperdiet odio sagittis nam euismod potenti. Euismod ultricies integer neque praesent ex</p>
                        <input className="btn2" type='button' value={"Read Stories"} />
                    </div>
                </div>
                <div className="cont3">
                    <div className="cartInfo">
                        <div className="Incart1">
                            <h2>Q5 / 100%</h2>
                            <h3>Metaverse</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="Incart2">
                            <h2>Q4 / 75%</h2>
                            <h3>Events & Meetup Developer team</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="Incart3">
                            <h2>Q3 / 60%</h2>
                            <h3>Merchandise Release</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="Incart4">
                            <h2>Q2 / 45%</h2>
                            <h3>Launch NFT Game</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className="Incart5">
                            <h2>Q1 / 30%</h2>
                            <h3>Build Strong Community & Productions</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>

                    </div>
                    <div className="cartImg">
                        <img className="girl1" src="./img/Girlislamik.png" />
                    </div>
                </div>
                <div className="cont4">
                    <div className="cart1Cont4">
                        <img className="jabal1" src="./img/jabal1.png" />
                        <img className="jabal2" src="./img/jabal2.png" />
                        <img className="jabal3" src="./img/jabal3.png" />
                    </div>
                    <div className="cart2Cont4">
                        <h1>Let’s build the future of digital economies together</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <h3>Playfull game</h3>
                        <p>Penatibus tortor placerat facilisis morbi ornare magnis sapien turpis laoreet fermentum felis</p>
                        <h3>Solid Community</h3>
                        <p>Penatibus tortor placerat facilisis morbi ornare magnis sapien turpis laoreet fermentum felis</p>
                        <h3>Author Support</h3>
                        <p>Penatibus tortor placerat facilisis morbi ornare magnis sapien turpis laoreet fermentum felis</p>
                    </div>
                </div>
                <div className="cont5">
                    <h1 className="cont5h1">Getting Started With Nozzl</h1>
                    <p>Enim ex dui fringilla consequat cursus eleifend nascetur lacus at scelerisque morbi venenatis sagittis</p>
                    <div className="cont5P">
                        <div className="Cont5cart1">
                            <h1>Connect Wallet</h1>
                            <p>Sollicitudin curabitur potenti montes quis luctus ad sagittis penatibus lacus</p>
                        </div>
                        <div className="Cont5cart2">
                            <h1>Get Character</h1>
                            <p>Sollicitudin curabitur potenti montes quis luctus ad sagittis penatibus lacus</p>
                        </div>
                        <div className="Cont5cart3">
                            <h1>Create Account</h1>
                            <p>Sollicitudin curabitur potenti montes quis luctus ad sagittis penatibus lacus</p>
                        </div>
                        <div className="Cont5cart4">
                            <h1>Play Game</h1>
                            <p>Sollicitudin curabitur potenti montes quis luctus ad sagittis penatibus lacus</p>
                        </div>
                    </div>
                </div>
                <div className="cont6">
                    <h4>MEET OUR TEAM</h4>
                    <h1 className="cont6h1">Teamwork makes the dream work</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="cont6P">
                        <div className="Cont6cart1">
                            <img className="girlCont6" src="./img/Girlislamik.png" />
                            <h1>Chris Matthews</h1>
                            <p>FOUNDER</p>
                        </div>
                        <div className="Cont6cart2">
                            <img className="girlCont6" src="./img/Girlislamik.png" />
                            <h1>Natasha Taylor</h1>
                            <p>CO-FOUNDER</p>
                        </div>
                        <div className="Cont6cart3">
                            <img className="girlCont6" src="./img/Girlislamik.png" />
                            <h1>Robert Ryan</h1>
                            <p>DESIGNER</p>
                        </div>
                        <div className="Cont6cart4">
                            <img className="girlCont6" src="./img/Girlislamik.png" />
                            <h1>Peter Rogers</h1>
                            <p>WEB 3 DEV</p>
                        </div>
                    </div>
                </div>
                <div className="cont7">
                    <video controls>
                        <source src={process.env.PUBLIC_URL + './img/reactjs.mp4'} type="video/mp4" />
                    </video>
                </div>
                <div className="cont8">
                    <div className="infoCont8">
                        <h3>FAQ</h3>
                        <h1>Frequently Ask Questions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                    </div>
                    <div className="cartCont8">
                        <div className="cart1Cont8">
                            <h3>Lobortis integer lacus cubilia nostra dictumst eu neque interdum?</h3>
                            <p>Ut tempor conubia interdum nulla parturient potenti porta luctus nibh. Dignissim sit letius leo condimentum lacus fringilla nam cursus. Letius consectetuer curabitur dis risus nulla.</p>
                        </div>
                        <div className="cart2Cont8">
                            <h3>Dictumst per imperdiet nibh egestas molestie pellentesque bibendum?</h3>
                            <p>Ut tempor conubia interdum nulla parturient potenti porta luctus nibh. Dignissim sit letius leo condimentum lacus fringilla nam cursus. Letius consectetuer curabitur dis risus nulla.</p>
                        </div>
                        <div className="cart3Cont8">
                            <h3>Curae pede mauris rutrum sollicitudin cras?</h3>
                            <p>Ut tempor conubia interdum nulla parturient potenti porta luctus nibh. Dignissim sit letius leo condimentum lacus fringilla nam cursus. Letius consectetuer curabitur dis risus nulla.</p>
                        </div>
                        <div className="cart4Cont8">
                            <h3>Consequat nisi montes eget ultrices elementum ac?</h3>
                            <p>Ut tempor conubia interdum nulla parturient potenti porta luctus nibh. Dignissim sit letius leo condimentum lacus fringilla nam cursus. Letius consectetuer curabitur dis risus nulla.</p>
                        </div>
                        <div className="cart5Cont8">
                            <h3>Sagittis lacinia sed in aliquet sodales nulla?</h3>
                            <p>Ut tempor conubia interdum nulla parturient potenti porta luctus nibh. Dignissim sit letius leo condimentum lacus fringilla nam cursus. Letius consectetuer curabitur dis risus nulla.</p>
                        </div>
                    </div>
                </div>
                <div className="cont9">
                    <h3>SOME OF OUR</h3>
                    <h1 className="h1cont9">Partners</h1>
                    <div className="cont9cart1">
                        <div className="contcdr1"><h1>velocity</h1></div>
                        <div className="contcdr2"><h1>utosia</h1></div>
                        <div className="contcdr3"><h1>LightAI</h1></div>
                        <div className="contcdr4"><h1>ideaa</h1></div>
                    </div>
                    <div className="cont9cart2">
                        <div className="contcdr1"><h1>goldline</h1></div>
                        <div className="contcdr2"><h1>FOX HUB</h1></div>
                        <div className="contcdr3"><h1>Code Lab</h1></div>
                        <div className="contcdr4"><h1>EARTH 2.0</h1></div>
                    </div>
                </div>
                <div className="cont10">
                    <div>
                        <h1 className="cont10h1" >Play the game. Collect your coin.</h1>
                        <p className="cont10p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <input className="cont10btn" type='button' value={'play now'} />
                    </div>
                    <div>
                        <img className="cont10bet" src="./img/bet.png" />
                    </div>
                </div>
                <div className="cont11">
                    <div className="displayCont11">
                        <div className="part1cont11">
                            <h1>Logo</h1>
                            <p>Accumsan commodo rutrum scelerisque maximus ridiculus augue urna in gravida</p>
                        </div>
                        <div className="part2cont11">
                            <a href="#">Land</a><br/>
                            <a href="#">Characters</a><br/>
                            <a href="#">Buy Asset</a><br/>
                            <a href="#">Roadmap</a><br/>
                            <a href="#">Marketplace</a>
                        </div>
                        <div className="part3cont11">
                            <a href="#">About us</a><br/>
                            <a href="#">Team</a><br/>
                            <a href="#">Press</a><br/>
                            <a href="#">Term of use</a><br/>
                            <a href="#">FAQ</a>
                        </div>
                        <div className="part4cont11">
                            <h5>Signup our newsletter to get update information, news, insight or promotions.</h5>
                            <input type="email" className="email" placeholder="Email"/><br/>
                            <input type="button" className="SignUp" value={'Sign Up'}/>
                            
                        </div>
                    </div>
                    <p className="paracont11">Copyright © 2024 Latifa-El-Afifa, All rights reserved. Present by MoxCreative</p>
                </div>
            </div>
    );
  }
}

export default About;