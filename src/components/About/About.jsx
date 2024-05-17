import "./About.scss";
import BhaiKanhaiyaJi from "../../assets/images/bhai-kanhaiya-ji.png"



function About() {


    return (
        <>
            <section className="about">
                <div className="about__heading">
                    <div className="about__title">
                        SEVA-SITE
                    </div>
                    <div className="about__description">
                        A selfless-service platform to connect the local community
                    </div>
                </div>
                <div className="about__sevadaar">
                    <img src={BhaiKanhaiyaJi} className="about__sevadaar-img"></img>
                    <div className="about__seva">
                        seva
                    </div>
                </div>
            </section>
        </>
    )
}

export default About; 
