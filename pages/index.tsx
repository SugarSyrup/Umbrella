import styled from "styled-components";
import Lenis from '@studio-freight/lenis';
import Lottie from 'react-lottie';
import companyData from '../src/lotties/company.json';
import featureData from '../src/lotties/features2.json';
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


export default function Home() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const textTriggerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: textTriggerRef.current,
        //         pin:true,
        //         start:'top top',
        //         end: '+=3000'
        //     }
        // })

        // const horSection = gsap.utils.toArray(".hor__wrap .hor");
        // const horWrap = document.querySelector(".hor__wrap");
        // const horWrapWidth = horWrap.offsetWidth;

        // const pin = gsap.to(sectionRef.current, {
        //     xPercent: -100 * (horSection.length - 1),
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: triggerRef.current,
        //         start: "top 10%",
        //         snap: 1 / (horSection.length - 1),
        //         end: () => `+=${horWrapWidth}`,
                
        //         pin: true,
        // //         scrub: 1,
        //         markers: false,
        //     }
        // });
        //https://www.youtube.com/watch?v=PeFqGrEHnp0
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start:"top 8%",
                end: "2000 top",
                scrub: 0.6,
                pin:true,
            }
        })

        return () => {
            pin.kill();
        }
    },[])

    return (
    <StyledMain>
        <StyledHeader id="header">
            <nav>
                  <ul>
                        <li><a href="/"><img width="40px" src='/images/logo.png' alt="logo" /></a></li>
                        <li>
                            <a href="#main">Site</a>
                            <a href="#sectoin2">Features</a>
                            {/* <a href="#">Annoncement</a> */}
                            <a href="#">Contact Us</a>
                        </li>
                        <li><a href="/user/login">login / signup</a></li>
                  </ul>
            </nav>     
        </StyledHeader>
        <StyledMainContent id="main">
            <section id="section1">
              <div className="text__effect1">
                  <p>For</p><p>Better</p><p>Co-working</p><p>Experience</p>
              </div>
              <div className="text__effect2" ref={textTriggerRef}>
                <Lottie 
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: companyData,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }}}
                    width={800}
                />
                <span className="right">
                    편리하게 연동되는 종합 협업 플랫폼
                </span>
              </div>    
              <div className="text__effect2">
                <span className="left">
                    업무를 위해 연동되는 다양한 기능들
                </span>
                <Lottie 
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: featureData,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice"
                        }}}
                    width={800}
                    height={800}
                />
              </div>
          </section> 
          <section id="section2" className="horizontal" ref={triggerRef} >
              <div className="hor__wrap" id="wrap" ref={sectionRef}>
                  <div className="hor"><span>Chat</span></div>
                  <div className="hor"><span>Drive</span></div>
                  <div className="hor"><span>Schedule</span></div>
                  <div className="hor"><span>Meeting</span></div>
                  <div className="hor"><span>Board</span></div>
              </div>
          </section>
          <section id="section3">
              <div className="text__effect4">
                    <span>지금 엄브렐라를 통해 협업을 시작해보세요</span>
                  <a href="user/login">지금 시작하기</a>
              </div>
              {/* <div className="text__effect2">
                  <div className="left"><span>box1</span></div>
                  <div className="right"><span>box2</span></div>
              </div>
              <div className="text__effect3">
                  <div className="left"><span>box3</span></div>
                  <div className="right"><span>box4</span></div>
              </div> */}
          </section> 
        </StyledMainContent>
        <StyledFooter id="footer">  
          <p>Team Umbrella</p>
          <span>Contact Us : <a href="mailto:tlfvm04@naver.com">tlfvm04@naver.com</a></span>
        </StyledFooter>
        
    </StyledMain>
    )
}

const StyledMain = styled.div`
    overflow-x: hidden;
    margin: 0;
    padding: 0%;
`

const StyledHeader = styled.header`
  position: fixed;
  left: 0; top: 0;
  width: 100%;
  z-index: 10000;
  border-bottom: 1px solid #34283847;
  backdrop-filter : blur(10px);  

  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li a {
    font-family: 'Abel';
    padding: 20px;
    display: inline-block;
    text-transform: uppercase;
    color: #202020;
  }
`

const StyledFooter = styled.footer`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

    height:40px;

  text-align: center;
  font-family: 'Abel';
  padding: 10px;

  a {
    color: #000;
  }
    
`

const StyledMainContent = styled.main`
  #section1 {
    //background: #EDF0ED;
    background-color:white;
    padding-top: 40px;
  }
  .text__effect1 {
    font-family: 'Saint Monica Regular';
    font-size: 14vw;
    color: #372838;

    text-align: left;
    text-transform: uppercase;

    padding: 0 0 1vw 1vw;
    margin:10px 0px 50px 0px;
//    border-bottom: 1px solid #34283847;

    line-height: 0.81;
  }
  .text__effect2 {
    height:500px;
    margin-top:100px;
    padding-bottom:40px;
//    border-bottom: 1px solid #34283847;
    
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    color: #2E3828;
    font-size: 3vw;
    font-family: 'Saint Monica Regular';
    font-weight:bolder;
    word-spacing: -5px;
    div{
        margin:0px;
    }
  }
  .text__effect2 span {
      color: #2E3828;
      padding: 10px;
      font-family: 'Abel';
      display: inline-block;
  }
  .text__effect2 span.left{
    margin-left:100px;
    margin-right:-100px;
  }
  .text__effect2 span.right{
    margin-right:100px;
    margin-left:-100px;
  }

  .text__effect3 {
      height: 50vh;
      border-bottom: 1px solid #34283847;
      display: flex;
  }
  .text__effect3 .left {
      width: 70%;
      border-right: 1px solid #34283847;
  }
  .text__effect3 .right {
      width: 30%;
  }
  .text__effect3 span {
      color: #2E3828;
      padding: 10px;
      font-family: 'Abel';
      display: inline-block;
  }
  .text__effect4 {
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items:center;

      color: #2E3828;
      font-size: 2vw;
      font-family: 'Saint Monica Regular';
      font-weight:bolder;
      word-spacing: -5px;

      margin-top: 5vw;
      padding-bottom: 3vw;
      border-bottom: 1px solid #33283847;

      span {
        margin-bottom:10px;
      }

      a{
        position: relative;
        display: inline-block;
        font-size: 22px;
        text-decoration: none;
        padding: 20px 60px;
        color: white;
        margin: 20px 10px 10px;
        border-radius: 6px;
        text-align: center;
        transition: top .01s linear;
        text-shadow: 0 1px 0 #37283815;
        background-color: #4d384f;
        box-shadow: 0 0 0 1px #372838 inset,
                0 0 0 2px rgba(255,255,255,0.15) inset,
                0 8px 0 0 rgba(70, 53, 68, 0.7),
                0 8px 0 1px rgba(0,0,0,.4),
                0 8px 8px 1px rgba(0,0,0,0.5);
      }
      a:hover{
        background-color: #634a60;
      }
      a:active{
        box-shadow: 0 0 0 1px #cb99c5 inset,
                0 0 0 2px rgba(255,255,255,0.15) inset,
                0 0 0 1px rgba(0,0,0,0.4);
      }
  }

  /* section2 */
  #section2 {
      background: #2c2838;
  }
  #section2 h2 {
      color: #fff;
      font-size: 11vmax;
      line-height: 1;
      font-family: 'Saint Monica Regular';
      font-weight: normal;
      text-transform: capitalize;
      height: 30vh;
      padding: 5vh;
  }
  .hor__wrap {
      display: flex;
      flex-wrap: wrap;
      width: 420vw;
      height: 90vh;
  }
  .hor__wrap > div {
      width: 80vw;
      height: 90%;
      border: 1px solid #fff;
      margin-right: 1vw;
      margin-left: 1vw;
  }
  .hor__wrap > div span {
      padding: 10px;
      font-family: 'Abel';
      color: #fff;
      display: inline-block;
  }
`