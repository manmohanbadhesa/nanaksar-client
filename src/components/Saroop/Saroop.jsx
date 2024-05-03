import "./Saroop.scss"
import GuruNanakDevJi from "../../assets/images/guru-nanak-dev-ji.jpg"
import BabaNandSinghJi from "../../assets/images/baba-nand-singh-ji.jpg"
import BabaIsherSinghJi from "../../assets/images/baba-isher-singh-ji.jpeg"


function Saroop() {

    return (
        <>
            <section className="saroops">
                <h1 className="gurshabad">
                    ਸਚ ਖੰਡਿ ਵਸੈੈ ਨਿਰੰਕਾਰੁ
                </h1>
                <div className="saroops-main">
                    <div className="saroops__Guru-Nanak-Dev-Ji">
                        <img className='saroops__Guru-Nanak-Dev-Ji--saroop' src={GuruNanakDevJi} />
                    </div>
                    {/* <div className="saroops__sant">
                        <div className="saroops__Baba-Nand-Singh-Ji">
                            <img className='saroops__Baba-Nand-Singh-Ji--saroop' src={BabaNandSinghJi} />
                        </div>
                        <div className="saroops__Baba-Isher-Singh-Ji">
                            <img className='saroops__Baba-Isher-Singh-Ji--saroop' src={BabaIsherSinghJi} />
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )

}

export default Saroop;

