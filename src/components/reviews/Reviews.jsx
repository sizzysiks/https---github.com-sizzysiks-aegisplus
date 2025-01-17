import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import './reviews.css'

import img1 from '../../assets/reviews/review1.webp'
import img2 from '../../assets/reviews/review3.webp'

import Button from '../../common/Button'
import CardIcons from './CardIcons';

export default function Reviews (){
    const wrapperRef = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ref1.current,
            { rotateZ: '-5deg' },
            {
                rotateZ: '0deg',
                scrollTrigger: {
                    trigger: ref1.current,
                    start: "top 80%",
                    end: "bottom 0%",
                    scrub: true,
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(
            ref2.current,
            { rotateZ: '5deg' },
            {
                rotateZ: '0deg',
                scrollTrigger: {
                    trigger: ref2.current,
                    start: "top 90%",
                    end: "bottom 0%",
                    scrub: true,
                    toggleActions: "play none play reverse",
                }
            }
        );  
    }, { dependencies: [] });

    return(
        <div className="reviews" ref={wrapperRef}>
            <div className="reviews-top">
                <h2 className='page-type'>Happy clients</h2>
            </div>

            <div className="reviews-cards">
                <div className="card" ref={ref1}>
                    <span className='pin'></span>
                    <div className="card-header">
                        <div className='card-header-profile' id='card-header-orng'>A</div>
                        <div>
                            <p>Aida V. <span>CEO, OnSolutions</span></p>
                            <small>Tirana, Albania</small>
                        </div>
                    </div>
                    <div className="card-top">
                        <div className="card-img">
                            <img src={img1} alt="aegis-review-aida" width='1500' height='1080' title="Aegis Plus review, by Aida V." loading="lazy" />
                        </div>
                    </div>
                    <CardIcons />
                    <small>Their team's creativity and attention to detail brought our vision to life seamlessly. 
                        The website they designed exceeded our expectations, and our online presence has never been stronger. 
                        Thank you for your professionalism and dedication to our project.
                    </small>
                </div>

                <div className="card" ref={ref2}>
                    <span className='pin'></span>
                    <div className="card-header">
                        <div className='card-header-profile' id='card-header-blue'>S</div>
                        <div>
                            <p>Susan F. <span>CEO, Juubix</span></p>
                            <small>London, UK</small>
                        </div>
                    </div>
                    <div className="card-top">
                        <div className="card-img">
                            <img src={img2} alt="aegis-review-susan" width='1500' height='1080' title="Aegis Plus review, by Susan F." loading="lazy" />
                        </div>
                    </div>
                    <CardIcons />
                    <small>From the initial consultation to the final launch, they were responsive, collaborative, and committed to delivering a site that truly reflects our brand. We've received countless compliments on the design and functionality, and our online traffic has increased greatly!</small>
                </div>
            </div>

            <div className="reviews-bottom">
                {/* <p>Explore what our clients have to say about their experiences working with Aegis Plus. Our commitment to excellence shines through in every project, delivering results that exceed expectations.</p> */}
                <div>
                    <Button url="/contact" label="Let's join forces" />
                </div>
            </div>
        </div>
    )
}