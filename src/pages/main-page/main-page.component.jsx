import React from "react";
import honeyJar from "../../assets/honeyjar.png";
import bee1 from "../../assets/bee1.png";
import bee3 from "../../assets/bee3.png";
import bee4 from "../../assets/bee4.png";
import bee5 from "../../assets/bee5.png";
import flower2 from "../../assets/flower2.png";
import "./main.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import AboutPage from "../about-page/about-page.component";

const MainPage = () => (
    <main className="main-page">
        <section className="main">
            <div className="text-container">
            <img className="bee bee1" src={bee1} alt="bee" />
            <img className="bee bee3" src={bee3} alt="bee" />
            <span className="main-title">Bee Happy</span>
            <span className="sub-title">A LEGJOBB HELYEN VAGY</span>
            <span className="sub-title">AHOL A LEGJOBB MÉZET KAPOD</span>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro
            repudiandae aperiam nihil placeat quod corrupti perferendis rerum quia
            ipsam alias necessitatibus dolor sapiente, velit magni hic natus. Quae,
            distinctio!
            </p>
            <CustomButton className="button">Tudj meg többet</CustomButton>
            <img className="flower flower1" src={flower2} alt="flower" />
            </div>
            <div className="img-container">
            <img className="honey" src={honeyJar} alt="honey jar" />
            <img className="bee bee4" src={bee4} alt="bee" />
            <img className="bee bee5" src={bee5} alt="bee" />
            <img className="flower flower2" src={flower2} alt="flower" />
            <img className="flower flower3" src={flower2} alt="flower" />
            <img className="flower flower4" src={flower2} alt="flower" />
            </div>
        </section>
        <AboutPage />
    </main>

);

export default MainPage;
