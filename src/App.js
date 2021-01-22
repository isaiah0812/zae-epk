import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style={{fontWeight: 'bold'}}>Isaiah Bullard</h1>

        <h2>Biography</h2>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
          <div style={{width: '50%'}}>
            <img src="/assets/DSC09323.jpg" alt="Isaiah Bullard" style={{ width: '60%', height: 'auto', alignSelf: 'right' }} />
          </div>
          <div style={{width: '50%', textAlign: 'left', background: "rgba(255, 255, 255, 0.5)", padding: '1%'}}>
            <p>
              Isaiah Bullard’s love for music is something that even he can’t
              deny. The 22-year-old producer—raised in the Austin, Texas,
              suburb of Pflugerville—has been involved in music since age three,
              beginning piano lessons at that age. From there, Bullard took
              piano lessons until age nine, and at age eleven, began to study
              percussion in his middle school band. His high school band experience,
              however, with the band would solidify his love for music, as Isaiah began
              composing music in the summer prior to his senior year. After graduating,
              Isaiah decided to study Computer Science at Baylor University in Waco,
              Texas, but vowed to keep music in his life, somehow. And so, Bullard began
              his passion for producing by making his first beat in GarageBand on his phone.
              After Bullard received a license to FL Studio 12 as birthday gift, he
              began selling his beats in October of 2017.
            </p>
            <p>
              Since then, Bullard has put out a solo instrumental album (“Maestro” in August 2018),
              a free beat tape (“The Holly Jolly Tape” in December 2019), and is planning on
              releasing a second album— “Zae’s Room”—in February 2021. Although Bullard’s
              debut album had little vocals featured on the project, “Zae’s Room” is to be
              a continuation on Bullard’s efforts to bring artists together to make music
              over his production, featuring no rapping of his own. Bullard, with these
              releases, has also become a self-taught audio engineer, mixing and mastering
              many of the tracks in his catalog. Isaiah also formed the collective “Community
              Service” with his cousin, CoreyArnell, and Richmond, Virginia-native, De’John
              Linward. The group released their first album “Community Service Radio” in
              August of 2019.
            </p>
            <p>
              Bullard	continues to pursue his love for music in everyway possible. 
              He consistently tries to project himself through his productions and tell a
              story with out saying a word. He is an instrumentalist and a performer at
              heart, and the career of Isaiah Bullard is one that will be worth watching.
            </p>
          </div>
        </div>
        
        <h2>Press Photos</h2>
        <a href="/assets/pressphotos.zip" style={{color: "#000000"}} download>Download Here!</a>
        <div style={{ width: '100%', maxHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
          <img src="/assets/DSC09335.jpg" alt="Isaiah Bullard" style={{ width: '20%', height: 'auto', padding: '1%'}} />
          <img src="/assets/DSC09351.jpg" alt="Isaiah Bullard" style={{ width: '20%', height: 'auto', padding: '1%'}} />
          <img src="/assets/DSC09429.jpg" alt="Isaiah Bullard" style={{ width: '30%', height: 'auto', padding: '1%'}} />
          <img src="/assets/DSC09437.jpg" alt="Isaiah Bullard" style={{ width: '20%', height: 'auto', padding: '1%'}} />
        </div>

        <h2>Music</h2>
        <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', width: '100%', flexWrap: 'wrap-reverse'}}>
          <div style={{width: '48%', padding: '1%'}}>
            <h3>Maestro (album)</h3> 
            <iframe title="Maestro" style={{border: 0, width: '100%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/album=2239082049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
          </div>
          <div style={{width: '48%', padding: '1%'}}>
            <h3>Fast Lane (Supersonic Freestyle) feat. CoreyArnell & FUZE</h3> 
            <iframe title="Fast Lane" style={{border: 0, width: '100%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/track=389561544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
          </div>
          <div style={{width: '48%', padding: '1%'}}>
            <h3>The Holly Jolly Tape (beat tape)</h3>
            <iframe title="The Holly Jolly Tape" style={{border: 0, width: '100%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/album=402273398/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
          </div>
          <div style={{width: '48%', padding: '1%'}}>
            <h3>Big Thangs feat. CoreyArnell & May</h3> 
            <iframe title="Big Thangs" style={{border: 0, width: '100%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/track=1119170738/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
            <a href="#big-thangs-video" style={{color: "#000000"}}>See the music video below!</a>
          </div>
          <div style={{width: '48%', padding: '1%'}}>
            <h3>Evil Plan feat. LouieV T & FUZE</h3> 
            <iframe title="Evil Plan" style={{border: 0, width: '100%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/track=2329859596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
          </div>
          <div style={{width: '48%', padding: '1%'}}>
            <h3>Toy Box feat. Mark Pheonix, CoreyArnell & Phri</h3> 
            <iframe title="Toy Box" style={{border: 0, width: '100%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/track=1805792918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
          </div>
        </div>

        <h2>Videos</h2>
        <iframe title="Big Thangs Video" id="big-thangs-video" style={{border: 0, width: 560, height: 315}} src="https://www.youtube.com/embed/FIT_DhSPpyw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        <h2>Press</h2>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{width: '75%', background: "rgba(255, 255, 255, 0.5)", padding: '1%'}}>
            <a href="https://blog.acrylicstyle.com/2021/01/isaiah-bullard-toy-box-feat-mark.html" target="_blank" rel="noopener noreferrer" style={{color: '#000000'}}>{"Acrylic Style: Isaiah Bullard - Toy Box feat. Mark Pheonix, CoreyArnell and Phri {Prod. Isaiah Bullard} [Track]"}</a>
          </div>
        </div>

        <h2>Contact/Social Media</h2>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{width: '75%', background: "rgba(255, 255, 255, 0.5)", padding: '1%'}}>
            <p style={{margin: 0}}>Email: <a href="mailto:zae@zaemadethis.com" style={{color: '#000000'}}>zae@zaemadethis.com</a></p>
            <p style={{margin: 0}}>Instagram: <a href="https://www.instagram.com/zaemadethis" style={{color: '#000000'}} target="_blank" rel="noopener noreferrer">@zaemadethis</a></p>
            <p style={{margin: 0}}>Twitter: <a href="https://www.twitter.com/zaemadethis" style={{color: '#000000'}} target="_blank" rel="noopener noreferrer">@zaemadethis</a></p>
            <p style={{margin: 0}}>Tik Tok: <a href="https://www.tiktok.com/@zaemadethis" style={{color: '#000000'}} target="_blank" rel="noopener noreferrer">@zaemadethis</a></p>
          </div>
        </div>
      </div>
    );
  }
}
