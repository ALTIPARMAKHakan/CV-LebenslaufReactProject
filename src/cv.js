import './styles/styles.css'
import hakanaltiparmakFoto from './img/hakan.png'
import {Component} from 'react'
import History from './history'
import ContactForm from './contact-form.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Header extends Component{
    render(){
        const headerCv2 = "CV "
        const headerCv1 = "Hakan Altiparmak"
        const github = <FontAwesomeIcon icon={faGithub} />
        const linkedin = <FontAwesomeIcon icon={faLinkedin} />
        return(
            <header className='header, blink'>
                <h1>{headerCv1}</h1>
                <h2>{headerCv2}</h2>
                <div id="link-wrapper">
                    <div style={{textAlign:"right"}}><a href="https://www.linkedin.com/in/altiparmakhakan/" target="_blank" rel="noreferrer">{linkedin}</a></div>
                    <div id="github-div"><a href="https://github.com/ALTIPARMAKHakan" target="_blank" rel="noreferrer">{github}</a></div>
                </div>
            </header>
        )
    }
}
class HalloBild extends Component{
    render(){
        const halloMessage ="Wilkommen"
        return(
            <div className='hallo, blink'>
                <h2>{halloMessage}</h2>
                <img src ={hakanaltiparmakFoto} className="foto" alt="nochmal Hallo"  />
            </div>
        )
    }
}
class Main extends Component{
    render(){
        return(
            <main>
                <HalloBild />
                <History />
                <ContactForm/>
            </main>
        )
    }
}
class Footer extends Component{
    render(){
        return(
            <footer>
                <nav className='footer-menu, blink'>
                <a href='impressum.hmtl'>Impressum</a>
                 <span> </span>
                <a href='datenschutzerklaerung.html'>Datenschutzerklärung</a>                
                </nav>
            </footer>
        )
    }
}
function Cv(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>            
        </div>
    );
}
export default Cv;