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
                        <div className="about__seva-heading">
                            <h1 className="about__seva__title">
                                Seva
                            </h1>
                            
                        </div>
                        <div className="about__seva-bhai-kanhaiya">

                        </div>
                        <div className="about__seva-bhangti">
                            <p className="about__seva-bhangti--bani">ਇਤੁ ਤਨਿ ਲਾਗੈ ਬਾਣੀਆ || </p>
                            <p className="about__seva-bhangti--transliteration">This body is softened with the Word of the Guru's Bani</p>
                            <p className="about__seva-bhangti--bani">ਸੁਖੁ ਹੋਵੈ ਸੇਵ ਕਮਾਣੀਆ ||</p>
                            <p className="about__seva-bhangti--transliteration">You shall find peace, doing seva.</p>
                            <p className="about__seva-bhangti--bani">ਸਭ ਦੁਨੀਆ ਆਵਣ ਜਾਣੀਆ</p>
                            <p className="about__seva-bhangti--transliteration">All the world continues coming and going in reincarnation.</p>
                            <p className="about__seva-bhangti--bani">ਵਿਚਿ ਦੁਨੀਆ ਸੇਵ ਕਮਾਈਐ ||</p>
                            <p className="about__seva-bhangti--transliteration">In the midst of this world, do seva.</p>
                            <p className="about__seva-bhangti--bani">ਤਾ ਦਰਗਹ ਬੈੈਸਣੁ ਪਾਈਐ ||</p>
                            <p className="about__seva-bhangti--transliteration">And you shall be given a place of honor in the Court of the Lord</p>
                            <p className="about__seva-bhangti--bani">ਕਹੁ ਨਾਨਕ ਬਾਹ ਲੁਡਾਈਐ ||</p>
                            <p className="about__seva-bhangti--transliteration">Says Nanak, swing your arms in joy!</p>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About; 
