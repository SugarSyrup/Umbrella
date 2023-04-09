import styled from "styled-components";
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


export default function Home() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
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
        //         scrub: 1,
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
                start:"top -30%",
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
                        <li><a href="#"><img width="40px" src='/images/logo.png' alt="logo" /></a></li>
                        <li>
                            <a href="#">Site</a>
                            <a href="#">Work</a>
                            <a href="#">Script</a>
                        </li>
                        <li><a href="#">login / signup</a></li>
                  </ul>
            </nav>     
        </StyledHeader>
        <StyledMainContent id="main">
            <section id="section1">
              <div className="text__effect1">
                  <p>For</p><p>Better</p><p>Co-working</p><p>Experience</p>
              </div>
              <div className="text__effect2">
                <span>
                    편리하게 연동되는 종합 업무 플랫폼
                </span>
              </div>
              <div className="text__effect3">
                <span>
                    업무를 위해 연동되는 다양한 기능들
                </span>
              </div>
          </section> 
          <section id="section2" className="horizontal" ref={triggerRef} >
              <h2><span>creative website</span></h2>
              <div className="hor__wrap" id="wrap" ref={sectionRef}>
                  <div className="hor"><span>site1</span></div>
                  <div className="hor"><span>site2</span></div>
                  <div className="hor"><span>site3</span></div>
                  <div className="hor"><span>site4</span></div>
                  <div className="hor"><span>site5</span></div>
              </div>
          </section>
          <section id="section3">
              <div className="text__effect4">
                  <span>Ready to Start?</span>
                  <a href="user/login">LOGIN</a>
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
          <a href="mailto:tlfvm04@naver.com">tlfvm04@naver.com</a>
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
  text-align: center;
  font-family: 'Abel';
  padding: 10px;

  a {
    color: #000;
  }
    
`

const StyledMainContent = styled.main`
  #section1 {
    background: #EDF0ED;
    padding-top: 40px;
  }
  .text__effect1 {
      text-align: left;
      color: #372838;
      font-size: 14vw;
      line-height: 0.81;
      font-family: 'Saint Monica Regular';
      padding: 0 0 1vw 1vw;
      text-transform: uppercase;
      border-bottom: 1px solid #34283847;
  }
  .text__effect2 {
      height: 50vh;
      border-bottom: 1px solid #34283847;
      display: flex;
  }
  .text__effect2 .left {
      width: 30%;
      border-right: 1px solid #34283847;
  }
  .text__effect2 .right {
      width: 70%;
  }
  .text__effect2 span {
      color: #2E3828;
      padding: 10px;
      font-family: 'Abel';
      display: inline-block;
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
      font-size: 6vw;
      font-family: 'Saint Monica Regular';
      font-weight:bolder;
      word-spacing: -5px;

      margin-top: 5vw;
      padding-bottom: 3vw;

      text-transform: uppercase;
      border-bottom: 1px solid #33283847;

      a{
        padding: 20px 100px;
        border-radius: 10px;
        color:black;
        background-color:paleturquoise;
        text-decoration:none;
      }
  }

  /* section2 */
  #section2 {
      background: #2E3828;
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