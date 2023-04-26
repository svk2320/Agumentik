import React, { useState, useEffect } from "react";

import * as api from "../../services/api";

import styles from "./Home.module.css";

const Home = () => {
  const [links, setLinks] = useState({
    linkedIn_link: "",
    facebook_link: "",
    instagram_link: "",
    twitter_link: "",
  });

  useEffect(() => {
    (async function () {
      api
        .fetchWebsiteDetails()
        .then((result) => result.data.data)
        .then((res) => setLinks(res[0]));
    })();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.aboutUs1366pxChild} alt="" />
      <div className={styles.aboutUs1366pxInner}>
        <div className={styles.ourTeamParent}>
          <b className={styles.ourTeam}>Our Team</b>
          <div className={styles.quidamOfficiisSimiliqueContainer}>
            <p
              className={styles.quidamOfficiisSimilique}
            >{`Quidam officiis similique sea ei, vel tollit indoctum `}</p>
            <p
              className={styles.quidamOfficiisSimilique}
            >{`efficiendi ei, at nihil tantas platonem eos. `}</p>
          </div>
        </div>
      </div>
      <div className={styles.sebastianBennettParent}>
        <b className={styles.sebastianBennett}>Sebastian Bennett</b>
        <div className={styles.founder}>Founder, LEad Photographer, CEO</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his
          dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera
          integre suavitate per an, alienum phaedrum te sea. Ex sea causae
          dolores, nam et doming dicunt feugait. Ea mel scripta aperiri
          postulant. Ut sed affert audire.
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.facebookParent}>
            <a href={links.facebook_link}>
              <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
            </a>
            <a href={links.twitter_link}>
              <img className={styles.facebookIcon} alt="" src="/twitter.svg" />
            </a>
            <a href={links.instagram_link}>
              <img
                className={styles.facebookIcon}
                alt=""
                src="/instagram.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <img
        className={styles.aboutUs1366pxItem}
        alt=""
        src="/group-1000003656.svg"
      />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.testomonial1}>
        <div className={styles.whatCustomersAreSayingParent}>
          <b className={styles.whatCustomersAre}>What customer’s are saying?</b>
          <div className={styles.takeALook}>
            Take a look at what our customer’s are saying. At Nature we not only
            provide you with services but also we provide you with valuable
            experiences for your valuable time.
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-32@2x.png"
          />
          <img className={styles.frameItem} alt="" src="/rectangle-33@2x.png" />
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-34@2x.png"
          />
          <img
            className={styles.frameChild1}
            alt=""
            src="/rectangle-35@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-4@2x.png"
            />
            <div className={styles.greatPlaceTo}>
              “ Great place to spend your vacation while exploring different
              experiences. “
            </div>
          </div>
          <div className={styles.lineDiv} />
        </div>
      </div>
      <b className={styles.certificate}>Certificate</b>
      <div className={styles.loremIpsumDolorContainer}>
        <span className={styles.loremIpsumDolorContainer1}>
          <p className={styles.quidamOfficiisSimilique}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
            turpis sodales,
          </p>
          <p className={styles.quidamOfficiisSimilique}>
            {" "}
            facilisis massa at, rutrum eros.
          </p>
        </span>
      </div>
      <div className={styles.dots}>
        <div className={styles.dot} />
        <div className={styles.dot1} />
        <div className={styles.dot2} />
        <div className={styles.dot3} />
        <div className={styles.dot4} />
        <div className={styles.dot5} />
        <div className={styles.dot6} />
        <div className={styles.dot7} />
        <div className={styles.dot8} />
        <div className={styles.dot9} />
        <div className={styles.dot10} />
        <div className={styles.dot11} />
        <div className={styles.dot12} />
        <div className={styles.dot13} />
        <div className={styles.dot14} />
        <div className={styles.dot15} />
        <div className={styles.dot16} />
        <div className={styles.dot17} />
        <div className={styles.dot18} />
        <div className={styles.dot19} />
        <div className={styles.dot20} />
        <div className={styles.dot21} />
        <div className={styles.dot22} />
        <div className={styles.dot23} />
        <div className={styles.dot24} />
        <div className={styles.dot25} />
        <div className={styles.dot26} />
        <div className={styles.dot27} />
        <div className={styles.dot28} />
        <div className={styles.dot29} />
        <div className={styles.dot30} />
        <div className={styles.dot31} />
        <div className={styles.dot32} />
        <div className={styles.dot33} />
        <div className={styles.dot34} />
        <div className={styles.dot35} />
        <div className={styles.dot36} />
        <div className={styles.dot37} />
        <div className={styles.dot38} />
        <div className={styles.dot39} />
        <div className={styles.dot40} />
        <div className={styles.dot41} />
        <div className={styles.dot42} />
        <div className={styles.dot43} />
        <div className={styles.dot44} />
        <div className={styles.dot45} />
        <div className={styles.dot46} />
        <div className={styles.dot47} />
        <div className={styles.dot48} />
        <div className={styles.dot49} />
        <div className={styles.dot50} />
        <div className={styles.dot51} />
        <div className={styles.dot52} />
        <div className={styles.dot53} />
        <div className={styles.dot54} />
        <div className={styles.dot55} />
        <div className={styles.dot56} />
        <div className={styles.dot57} />
        <div className={styles.dot58} />
        <div className={styles.dot59} />
        <div className={styles.dot60} />
        <div className={styles.dot61} />
        <div className={styles.dot62} />
        <div className={styles.dot63} />
        <div className={styles.dot64} />
        <div className={styles.dot65} />
        <div className={styles.dot66} />
        <div className={styles.dot67} />
        <div className={styles.dot68} />
        <div className={styles.dot69} />
        <div className={styles.dot70} />
        <div className={styles.dot71} />
        <div className={styles.dot72} />
        <div className={styles.dot73} />
        <div className={styles.dot74} />
        <div className={styles.dot75} />
        <div className={styles.dot76} />
        <div className={styles.dot77} />
        <div className={styles.dot78} />
        <div className={styles.dot79} />
        <div className={styles.dot80} />
        <div className={styles.dot81} />
        <div className={styles.dot82} />
        <div className={styles.dot83} />
        <div className={styles.dot84} />
        <div className={styles.dot85} />
        <div className={styles.dot86} />
        <div className={styles.dot87} />
        <div className={styles.dot88} />
        <div className={styles.dot89} />
      </div>

      <div className={styles.dots1}>
        <div className={styles.dot90} />
        <div className={styles.dot91} />
        <div className={styles.dot92} />
        <div className={styles.dot93} />
        <div className={styles.dot94} />
        <div className={styles.dot95} />
        <div className={styles.dot96} />
        <div className={styles.dot97} />
        <div className={styles.dot98} />
        <div className={styles.dot99} />
        <div className={styles.dot100} />
        <div className={styles.dot101} />
        <div className={styles.dot102} />
        <div className={styles.dot103} />
        <div className={styles.dot104} />
        <div className={styles.dot105} />
        <div className={styles.dot106} />
        <div className={styles.dot107} />
        <div className={styles.dot108} />
        <div className={styles.dot109} />
        <div className={styles.dot110} />
        <div className={styles.dot111} />
        <div className={styles.dot112} />
        <div className={styles.dot113} />
        <div className={styles.dot114} />
        <div className={styles.dot115} />
        <div className={styles.dot116} />
        <div className={styles.dot117} />
        <div className={styles.dot118} />
        <div className={styles.dot119} />
        <div className={styles.dot120} />
        <div className={styles.dot121} />
        <div className={styles.dot122} />
        <div className={styles.dot123} />
        <div className={styles.dot124} />
        <div className={styles.dot125} />
        <div className={styles.dot126} />
        <div className={styles.dot127} />
        <div className={styles.dot128} />
        <div className={styles.dot129} />
        <div className={styles.dot130} />
        <div className={styles.dot131} />
        <div className={styles.dot132} />
        <div className={styles.dot133} />
        <div className={styles.dot134} />
        <div className={styles.dot135} />
        <div className={styles.dot136} />
        <div className={styles.dot137} />
        <div className={styles.dot138} />
        <div className={styles.dot139} />
        <div className={styles.dot140} />
        <div className={styles.dot141} />
        <div className={styles.dot142} />
        <div className={styles.dot143} />
        <div className={styles.dot144} />
        <div className={styles.dot145} />
        <div className={styles.dot146} />
        <div className={styles.dot147} />
        <div className={styles.dot148} />
        <div className={styles.dot149} />
        <div className={styles.dot150} />
        <div className={styles.dot151} />
        <div className={styles.dot152} />
        <div className={styles.dot153} />
        <div className={styles.dot154} />
        <div className={styles.dot155} />
        <div className={styles.dot156} />
        <div className={styles.dot157} />
        <div className={styles.dot158} />
        <div className={styles.dot159} />
        <div className={styles.dot160} />
        <div className={styles.dot161} />
        <div className={styles.dot162} />
        <div className={styles.dot163} />
        <div className={styles.dot164} />
        <div className={styles.dot165} />
        <div className={styles.dot166} />
        <div className={styles.dot167} />
        <div className={styles.dot168} />
        <div className={styles.dot169} />
        <div className={styles.dot170} />
        <div className={styles.dot81} />
        <div className={styles.dot82} />
        <div className={styles.dot83} />
        <div className={styles.dot84} />
        <div className={styles.dot85} />
        <div className={styles.dot86} />
        <div className={styles.dot87} />
        <div className={styles.dot88} />
        <div className={styles.dot89} />
      </div>
      <img
        className={styles.imageImageStyle1}
        alt=""
        src="/image--image-style-1@2x.png"
      />
      <img
        className={styles.imageImageStyle3}
        alt=""
        src="/image--image-style-3@2x.png"
      />
      <img
        className={styles.imageImageStyle2}
        alt=""
        src="/image--image-style-1@2x.png"
      />
      <img
        className={styles.imageImageStyle4}
        alt=""
        src="/image--image-style-3@2x.png"
      />
      <div className={styles.footer}>
        <div>
          <img
            className={styles.socialMediaIcon}
            alt=""
            src="/social-media.svg"
            useMap="#image-map"
          />
          <map name="image-map">
            <area shape="circle" coords="0,0,50,50" href={links.facebook_link} />
            <area shape="circle" coords="0,0,75,75" href={links.twitter_link} />
            <area shape="circle" coords="0,0,150,150" href={links.linkedIn_link} />
            <area shape="circle" coords="0,0,200,200" href={links.instagram_link} />
          </map>
        </div>
        <div className={styles.link}>
          <div className={styles.company}>Company</div>
          <div className={styles.events}>Events</div>
          <div className={styles.blogs}>Blogs</div>
          <div className={styles.faq}>FAQ</div>
          <div className={styles.joinUs}>Join US</div>
          <div className={styles.about}>About</div>
          <div className={styles.project}>Project</div>
          <div className={styles.lorem}>Lorem</div>
          <div className={styles.services}>Services</div>
          <div className={styles.ourStory}>Our Story</div>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.abcloremcom}>abc@lorem.com</div>
          <div className={styles.india}>India</div>
        </div>
        <div className={styles.logoSummary}>
          <img
            className={styles.golLogoWhite1Icon}
            alt=""
            src="/gollogowhite-1@2x.png"
          />
          <div className={styles.loremIpsumIsContainer}>
            <span className={styles.loremIpsumDolorContainer1}>
              <p
                className={styles.quidamOfficiisSimilique}
              >{`Lorem Ipsum is simply dummy `}</p>
              <p className={styles.quidamOfficiisSimilique}>
                text of the printing and type
              </p>
              <p className={styles.quidamOfficiisSimilique}>
                setting industry.
              </p>
            </span>
          </div>
        </div>
        <div className={styles.footerChild} />
      </div>
      <div className={styles.downloadOurApp}>
        <div className={styles.downloadOurAppChild} />
        <div className={styles.downloadOurAppInner}>
          <div className={styles.googlePlayPngLogo37891Parent}>
            <img
              className={styles.googlePlayPngLogo37891Icon}
              alt=""
              src="/googleplaypnglogo3789-1@2x.png"
            />
            <b className={styles.getInOn}>GET IN ON</b>
            <b className={styles.googlePlay}>Google Play</b>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <img className={styles.frameChild2} alt="" src="/ellipse-10.svg" />
        </div>
        <a className={styles.downloadOurApp1}>Download Our App</a>
        <div className={styles.theBestTravel}>The best travel in the world</div>
        <img className={styles.elementIcon} alt="" src="/element.svg" />
      </div>
      <div className={styles.aboutUs1366pxChild1} />
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector-99.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
      </div>
      <div className={styles.loginSignupButton}>
        <div className={styles.loginWrapper}>
          <a className={styles.login}>Login</a>
        </div>
        <button className={styles.signUpWrapper}>
          <div className={styles.signUp}>Sign up</div>
        </button>
      </div>
      <img className={styles.golLogo2Icon} alt="" src="/gollogo-1@2x.png" />
      <nav className={styles.navVar}>
        <a className={styles.findReservations}>Find Reservations</a>
        <a className={styles.packagesParent}>
          <div className={styles.packages}>Packages</div>
          <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
        </a>
        <a className={styles.aboutLakshadweepParent}>
          <div className={styles.packages}>About Lakshadweep</div>
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        </a>
        <a className={styles.findReservations}>About Us</a>
        <a className={styles.findReservations}>Gol</a>
        <a className={styles.findReservations}>Support</a>
      </nav>
      <div className={styles.heading}>
        <button className={styles.headingInner}>
          <div className={styles.visitParent}>
            <div className={styles.visit}>Visit</div>
            <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
          </div>
        </button>
        <h1 className={styles.theExoticLakshadweepContainer}>
          <span className={styles.loremIpsumDolorContainer1}>
            <p className={styles.quidamOfficiisSimilique}>The Exotic</p>
            <p className={styles.lakshadweep}>Lakshadweep</p>
            <p className={styles.quidamOfficiisSimilique}>Islands</p>
          </span>
        </h1>
      </div>
      <button className={styles.discoverBtn}>
        <b className={styles.discoverNow}>Discover Now</b>
      </button>
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      <div className={styles.illustration}>
        <div className={styles.illustrationChild} />
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <img className={styles.peopleIcon} alt="" src="/people@2x.png" />
        <div className={styles.item}>
          <div className={styles.icbaselineFlightParent}>
            <img
              className={styles.icbaselineFlightIcon}
              alt=""
              src="/icbaselineflight.svg"
            />
            <div className={styles.jakartaBali}>Jakarta - Bali</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
          </div>
          <div className={styles.card}>
            <img
              className={styles.cardChild}
              alt=""
              src="/rectangle-9@2x.png"
            />
            <div className={styles.exploreLabuanBajoParent}>
              <b className={styles.jakartaBali}>Explore Labuan Bajo</b>
              <div className={styles.iconlyboldlocationParent}>
                <img
                  className={styles.iconlyboldlocation}
                  alt=""
                  src="/iconlyboldlocation.svg"
                />
                <div className={styles.jakartaBali}>NTT, Indonesua</div>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <img
              className={styles.cardItem}
              alt=""
              src="/rectangle-91@2x.png"
            />
            <div className={styles.cardInner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
