import styled from "styled-components";

export default function Home() {
    return (
    <StyledMain>
        <StyledHeader id="header">
            <nav>
                  <ul>
                        <li><a href="#">About</a></li>
                        <li>
                            <a href="#">Site</a>
                            <a href="#">Work</a>
                            <a href="#">Script</a>
                        </li>
                        <li><a href="#">contact</a></li>
                  </ul>
            </nav>     
        </StyledHeader>
        <StyledMainContent id="main">
            <section id="section1">
              <div className="text__effect1">
                  <div>frontend</div>
                  <div>devel</div>
              </div>
              <div className="text__effect2">
                  <div className="left"><span>box1</span></div>
                  <div className="right"><span>box2</span></div>
              </div>
              <div className="text__effect3">
                  <div className="left"><span>box3</span></div>
                  <div className="right"><span>box4</span></div>
              </div>
          </section> 
          <section id="section2" className="horizontal">
              <h2><span>creative website</span></h2>
              <div className="hor__wrap">
                  <div className="hor"><span>site1</span></div>
                  <div className="hor"><span>site2</span></div>
                  <div className="hor"><span>site3</span></div>
                  <div className="hor"><span>site4</span></div>
                  <div className="hor"><span>site5</span></div>
              </div>
          </section>
          <section id="section3">
              <div className="text__effect1">
                  <div>frontend</div>
                  <div>devel</div>
              </div>
              <div className="text__effect2">
                  <div className="left"><span>box1</span></div>
                  <div className="right"><span>box2</span></div>
              </div>
              <div className="text__effect3">
                  <div className="left"><span>box3</span></div>
                  <div className="right"><span>box4</span></div>
              </div>
          </section> 
        </StyledMainContent>
        <StyledFooter id="footer">     
          <a href="mailto:webstoryboy@naver.com">webstoryboy@naver.com</a>
        </StyledFooter>
        
    </StyledMain>
    )
}

const StyledMain = styled.div`
    margin: 0;
    padding: 0%;
`

const StyledHeader = styled.header`
  position: fixed;
  left: 0; top: 0;
  width: 100%;
  z-index: 10000;
  border-bottom: 1px solid #2e382848;
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
    padding-top: 80px;
  }
  .text__effect1 {
      text-align: left;
      color: #2E3828;
      font-size: 19vw;
      line-height: 0.81;
      font-family: 'Saint Monica Regular';
      padding: 0 0 1vw 1vw;
      margin-top: 1vw;
      text-transform: uppercase;
      border-bottom: 1px solid #2e382848;
  }
  .text__effect2 {
      height: 50vh;
      border-bottom: 1px solid #2e382848;
      display: flex;
  }
  .text__effect2 .left {
      width: 30%;
      border-right: 1px solid #2e382848;
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
      border-bottom: 1px solid #2e382848;
      display: flex;
  }
  .text__effect3 .left {
      width: 70%;
      border-right: 1px solid #2e382848;
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