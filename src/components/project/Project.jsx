/* eslint-disable no-unused-vars */
import React from 'react'

// css
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faExpand } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
    return (
        <>
        <div className='centeredSection'>
            <h2 className="intro centeredText " id='myprojects'>My Projects</h2>
            <div className='projRow'>
                <div className='projDetail'>

                    <h4 className="projTitle "><a href='https://github.com/ArifaEaterian/LearningFullStackWebDev/'><FontAwesomeIcon icon={faCaretRight} /> Random Password Generator</a></h4>
                    <p>Project Description:</p>
                    <p>Created a Random Password Generator using ReactJS. This app lets users generate secure passwords based on their chosen criteria, such as length and types of characters (uppercase, lowercase, numbers, special characters). It demonstrates skills in building interactive web applications with ReactJS.</p>

                    <div className='inDetailed'>
                        <div className="inDetail_con">
                            <p>Key Features:</p>

                            <ul>
                                <li>Customize password length and character types</li>
                                <li>Generate passwords instantly</li>
                                <li>Easy-to-use interface</li>
                            </ul>

                        </div>
                        <div className="inDetail_con">
                            <p>Technologies Used:</p>
                            <ul>
                                <li>ReactJS</li>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                            </ul>

                        </div>
                    </div>
                    <a href="https://github.com/ArifaEaterian/LearningFullStackWebDev/" target="_blank" className="socialLink"><FontAwesomeIcon icon={faExpand} /> View project </a>
                </div>

                <div className='projImg'>
                <img src='/assets/images/password-generator.jpg' alt='projectImg' />

                    {/* <img src='https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/password-generator.jpg' alt='projectImg' /> */}
                </div>
            </div>

            <div className='projRow'>
                <div className='projImg'>
                <img src='/assets/images/QuizApp.jpg' alt='projectImg' />

                    {/* <img src='https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/QuizApp.jpg' alt='projectImg' /> */}
                </div>

                <div className='projDetail'>

                    <h4 className="projTitle "><a href='https://github.com/ArifaEaterian/Quiz-app-JS'><FontAwesomeIcon icon={faCaretRight} /> Quiz-app</a></h4>
                    <p>Project Description:</p>
                    <p>Developed a Quiz App in HTML, CSS, and Javascript with dynamic score tracking and answer feedback.</p>

                    <div className='inDetailed'>
                        <div className="inDetail_con">
                            <p>Key Features:</p>

                            <ul>
                                <li>4 multiple-choice options per question</li>
                                <li>Dynamic score tracking and display</li>
                                <li>Real-time answer feedback</li>
                            </ul>

                        </div>
                        <div className="inDetail_con">
                            <p>Technologies Used:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>

                        </div>
                    </div>
                    <a href="https://github.com/ArifaEaterian/LearningFullStackWebDev/" target="_blank" className="socialLink"><FontAwesomeIcon icon={faExpand} /> View project </a>
                </div>


            </div>

            <div className='projRow'>
                <div className='projDetail'>

                    <h4 className="projTitle "><a href='https://github.com/ArifaEaterian/LearningFullStackWebDev/'><FontAwesomeIcon icon={faCaretRight} /> Calculator app</a></h4>
                    <p>Project Description:</p>
                    <p>Created a calculator app in react js. This app lets users to do calculations in daily basis.</p>

                    <div className='inDetailed'>
                        <div className="inDetail_con">
                            <p>Key Features:</p>

                            <ul>
                                <li>Numerical Calculation.</li>
                                <li>Fully responsive and user friendly.</li>
                            </ul>

                        </div>
                        <div className="inDetail_con">
                            <p>Technologies Used:</p>
                            <ul>
                                <li>ReactJS</li>
                            </ul>

                        </div>
                    </div>
                    <a href="https://github.com/ArifaEaterian/LearningFullStackWebDev/" target="_blank" className="socialLink"><FontAwesomeIcon icon={faExpand} /> View project </a>
                </div>

                <div className='projImg'>
                <img src='/assets/images/basic_calculator.jpg' alt='projectImg' />

                    {/* <img src='https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/basic_calculator.jpg' alt='projectImg' /> */}
                </div>
            </div>

            <div className='projRow'>
                <div className='projImg'>
                <img src='/assets/images/eaterian-wp.png' alt='projectImg' />

                    {/* <img src='https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/eaterian-wp.png' alt='projectImg' /> */}
                </div>

                <div className='projDetail'>

                    <h4 className="projTitle "><a href='https://github.com/ArifaEaterian/LearningFullStackWebDev/'><FontAwesomeIcon icon={faCaretRight} /> Customizable Product WooCommerce Website</a></h4>
                    <p>Project Description:</p>
                    <p>Developed a WooCommerce website in WordPress where customers can customize product sizes according to their requirements. This project highlights the integration of WooCommerce with custom product options to enhance user experience and meet specific customer needs.</p>

                    <div className='inDetailed'>
                        <div className="inDetail_con">
                            <p>Key Features:</p>

                            <ul>
                                <li>Customizable product sizes</li>
                                <li>User-friendly shopping experience</li>
                                <li>Seamless WooCommerce integration</li>
                            </ul>

                        </div>
                        <div className="inDetail_con">
                            <p>Technologies Used:</p>
                            <ul>
                                <li>WordPress</li>
                                <li>WooCommerce</li>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>PHP</li>

                            </ul>

                        </div>
                    </div>
                    <a href="https://github.com/ArifaEaterian/LearningFullStackWebDev/" target="_blank" className="socialLink"><FontAwesomeIcon icon={faExpand} /> View project </a>
                </div>


            </div>
        
        </div>
        <section className='pGallery'>
        <div className="projGall">

            <img decoding="async" src="/assets/images/Food_ordering.png" alt="" />
            <img decoding="async" src="/assets/images/bike_project.png" alt="" />
            <img decoding="async" src="/assets/images/NFT_landing_page.png" alt="" />
            <img decoding="async" src="/assets/images/pixlab_project.png" alt="" />
            <img decoding="async" src="/assets/images/hospital_project.png" alt="" />
            <img decoding="async" src="/assets/images/e-guru.jpg" alt="" />
 

            {/* <img decoding="async" src="https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/Food_ordering.png" alt="" />
            <img decoding="async" src="https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/bike_project.png" alt="" />
            <img decoding="async" src="https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/NFT_landing_page.png" alt="" />
            <img decoding="async" src="https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/pixlab_project.png" alt="" />
            <img decoding="async" src="https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/hospital_project.png" alt="" />
            <img decoding="async" src="https://arifaeaterian.github.io/My_Portfolio_In_React2/assets/images/e-guru.jpg" alt="" /> */}
        </div>
        <div className='moreBtn centeredText'>
        <a href="https://github.com/ArifaEaterian/LearningFullStackWebDev/" target="_blank" className="socialLink"><FontAwesomeIcon icon={faExpand} /> More Projects </a>
        </div>
    </section>
    </>
    );
}
export default Project;