import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './faqs.css'

import Faq from './Faq';
// import FaqQuestion from './FaqQuestion';

export default function Faqs (){
    const [activeFaq, setActiveFaq] = useState(1);

    const wrapperRef = useRef(null);

    // useGSAP(() => {
    //     gsap.fromTo(
    //         wrapperRef.current,
    //         { y: 100 },
    //         {
    //             y: 0,
    //             duration: 0.5,
    //             ease: "expo.out",
    //             scrollTrigger: {
    //                 trigger: wrapperRef.current,
    //                 start: "top 80%",
    //                 end: "bottom 0%",
    //                 // scrub: true,
    //                 toggleActions: "play none play reverse",
    //             }
    //         }
    //     );
    // }, { dependencies: [] });

    return(
        <div className="faqs-wrapper">
        <section className="faqs" ref={wrapperRef}>
            <h2 className='page-type'>What are you curious about?</h2>

            <div className="faqs-container">
                {faqs.map( faq => <Faq key={faq.id} title={faq.title} text={faq.text} id={faq.id} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />)}
            </div>

            {/* <FaqQuestion /> */}
        </section>
        </div>
    )
}

const faqs = [
    {
        title: 'What are the benefits of a custom website?',
        text: `Custom websites provide a unique representation of your brand, integrating tailored features aligned with your business needs for a personalized user experience. They are scalable, adaptable, and optimized for performance and SEO, ensuring faster loading times and higher search engine rankings. Custom websites also prioritize security, offering stability and peace of mind for you and your visitors.`,
        id: 1
    },
    {
        title: `Why is branding and good design important for a business?`,
        text: `Effective branding and design are essential for establishing a distinct identity and fostering trust among customers. They communicate a cohesive message about a company's values and offerings, forging emotional connections with the audience. Good design enhances user experience, positively impacting customer perception and loyalty.`,
        id: 2
    },
    {
        title: "How much does it cost to get a website designed for my business?",
        text: `The cost of designing a website can vary depending on factors such as the complexity of the design, 
        the number of pages, e-commerce functionality, and any additional features. 
        Our competitive prices are designed to provide you with the highest quality web design services at lower rates compared to many of our competitors.`,
        id: 3
    },
    {
        title: "How long does it take to build a website?",
        text: `The timeline for website development depends on various factors, including the scope of the project, the availability of content and assets, and the complexity of the design. We work closely with our clients to establish realistic timelines and strive to deliver high-quality websites in a timely manner.`,
        id: 4
    },
    {
        title: "How does your website design process work?",
        text: `We start with an initial consultation and questionnaire to understand your goals and preferences.
        We create a tailored design proposal for your review and feedback. Upon approval, we build your website, incorporating all necessary features,
        while providing ongoing support and maintenance after launch to ensure your website's success.`,
        id: 5
    },
]