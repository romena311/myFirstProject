import styles from "../styles/home.module.css";
import Layout from "../components/layout";
import IcondownArrow from "../components/downArrow";
import IconSend from "../components/send";
import React, { useState, useEffect} from "react";

function HomePage() {
   /* const [readMore, setreadMore] = useState(false);
    const extraContent = document.getElementById("Div");
    const dots = document.getElementById("dots");

    useEffect(() => {
        button.addEventListener ("click", changereadMore);
    }, []);
    const changereadMore = () => {
      if (dots.style.display === "none") {
        extraContent.style.display === "block";
        setreadMore(true);
      } else {
          extraContent.style.display === "none";
        setreadMore(false);
      }
    };*/
    return (
      <Layout>
        <section id="hero" className="parallax">
          <div className="hpInner text-center text-light">
            <div className={styles.intro}>
              <h2 className="Title">Welcome to My Project</h2>
              <h4 className="subTitle">
                I created this project with Next.js......
              </h4>
            </div>
          </div>
          <div className={`${styles.down} introText`}>
            <a href="#introduction" className="navbar-nav down text-center">
              <IcondownArrow />
            </a>
          </div>
        </section>
        <section id="introduction" className="py-md-5 mt-md-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="/picture16.jpg"
                  className={`${styles.pic} img-fluid`}
                  alt="photo"
                />
              </div>
              <div className="col-lg-6">
                <div className="container">
                  <h2 className="pt-3 pt-md-0"> Introduction </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus, eos. Doloremque natus nobis in hic voluptatum,
                    corporis quisquam esse deserunt alias placeat magni,
                    aspernatur et suscipit quasi odio culpa delectus!
                    <div id="dots">....</div>                 
                  </p>
                  <button className={`${styles.more} btn btn-primary`}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="parallax text-light py-5 mt-2 mb-5">
          <div className="container py-5">
            <div className="row work">
              <div className="col-12 text-center">
                <h2> My Works </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium, odio quia incidunt ratione tenetur provident
                  laudantium voluptatibus similique eum recusandae quis beatae?
                  Deserunt, exercitationem iusto sit perferendis non eos magni.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="container-fluid">
            <div className="row mx-auto text-center">
              <div className="col-lg-3 col-sm-6">
                <img src="/picture1.jpg" className="img-fluid" alt="photo" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit similique officiis sunt in iste itaque adipisci porro,
                  ullam animi voluptas provident maiores dolorum sint, quas eum
                  ipsum dignissimos veritatis obcaecati.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src="/picture1.jpg" className="img-fluid" alt="photo" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit similique officiis sunt in iste itaque adipisci porro,
                  ullam animi voluptas provident maiores dolorum sint, quas eum
                  ipsum dignissimos veritatis obcaecati.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src="/picture1.jpg" className="img-fluid" alt="photo" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit similique officiis sunt in iste itaque adipisci porro,
                  ullam animi voluptas provident maiores dolorum sint, quas eum
                  ipsum dignissimos veritatis obcaecati.
                </p>
              </div>
              <div className="col-lg-3 col-sm-6">
                <img src="/picture1.jpg" className="img-fluid" alt="photo" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit similique officiis sunt in iste itaque adipisci porro,
                  ullam animi voluptas provident maiores dolorum sint, quas eum
                  ipsum dignissimos veritatis obcaecati.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="parallax text-light py-5 mt-5">
          <div className="container pt-5 pb-2">
            <div className="row">
              <div className="col-12">
                <h2> Contact Me </h2>
                <hr className="bg-light" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, incidunt aut doloremque dignissimos iste culpa dicta
                  velit assumenda placeat voluptatum nam beatae sit voluptate
                  totam veritatis deserunt itaque veniam maxime?
                </p>
              </div>
              <div className="col-12 col-md-5 col-lg-5 col-xl-5">
                <p className="px-sm-3 text-justify">
                  Contact us and I'll be in touch within 24 hours.
                </p>
                <p className="px-sm-3 text-justify">
                  <img src="/location.svg" alt="" />
                  <span className="pl-2">Siliguri, West Bengal, India</span>
                </p>
                <p className="px-sm-3 text-justify">
                  <img src="/phone.svg" alt="" />
                  <span className="pl-2">+916253435363</span>
                </p>
                <p className="px-sm-3 text-justify">
                  <img src="/email.svg" alt="" />
                  <span className="pl-2">projectemail@gmail.com</span>
                </p>
              </div>
              <div className="col-12 col-md-7 col-lg-7 col-xl-7">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      id="name"
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      id="Email"
                    />
                  </div>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Comment"
                  name="comments"
                  id="comments"
                  cols="40"
                  rows="5"
                ></textarea>
                <br />
                <div className="row">
                  <div className="col-sm-12 form-group">
                    <button className="btn btn-outline-light" type="submit">
                      <IconSend />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default HomePage;
