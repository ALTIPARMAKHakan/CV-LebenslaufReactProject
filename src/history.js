import { Component } from "react"

const beisipiel = ""
const berufInfo ="Formulierung der dazu notwendigen chemischen Komponenten"
function HistoryEntry(props){

    const currentEntry= props.currentEntry
    return(
        <div className='blink'>
            <h2>{currentEntry.zeit}</h2>
            <h3>{currentEntry.name}</h3>
            <KeyPointList keyPoints={currentEntry.keyPoints}/>
            <p>{currentEntry.description}</p>
        </div>
    )
}
function ListItem(props){
    return(<li>{props.value}</li>)
}
function KeyPointList(props){
    const keyPoints = props.keyPoints
    const keyPointItems = keyPoints.map((keyPointItem) => 
        <ListItem key={keyPointItem.toString()}value={keyPointItem} /> // <li>{keyPointItem}</li>   eski hali
    ) 
    return(<ul>{keyPointItems}</ul>)
}
class Beruf extends Component{
    render(){
        // const jobHistory = "Beruf Erfahrung";
        const entryFreelancer ={
            "zeit": "2019-Heute",
            "name" : "Freelancer, 3D Designer, Programmier-Enthusiast",
            "keyPoints" : ["3Dsmax", "Arduino", "Phyton"],
            "description" : `Codierung der Kleinmaschinenautomatisierung mit Arduino und Eigenstudium zu Machine & Deep Learning mit Tensorflow und Python ${beisipiel}`
        }

        const entryAlpaEndustri = {
            "zeit": "2015-2018",
            "name" : "Entwicklungs- & Fertigungsingenieur / Firma Alpa Endüstri (Istanbul)",
            "keyPoints" : ["Einrichtung von Produktionsprozessen von Elastomeren zur Herstellung von Wärmeleitpasten, leitfähigen Lacken, ölabweisenden Oberflächenbeschichtungen, Siliconkautschuk welche bei Raumtemperatur vulkanisieren (RTV1, Alkoxy, Acetoxy), Zweikomponenten-Siliconkautschuk (RTV-2) und Siliconschaumprofile", "Tribologie; Einrichtung von Produktionsprozessen zur Herstellung von vollsynthetischen Fetten mit PAO, PTFE und Silikon-Fett", "Einrichtung von Produktionsprozessen zur Herstellung von leitfähigen Lacken auf Kohlenstoffbasis und Silberbasis, Metallpulvererzeugung mit 25-30-35 kHz im Hochfrequenzsystem und Lötpaste", "Chemie; Einrichtung von Produktionsprozessen zur Herstellung von wasserund ölabweisenden Oberflächenbeschichtungen, UV-härtenden Lacken, Aerosol-Inhaltsstoffen und Flugzeugreinigungs- und Enteisungsflüssigkeiten"],
            "description" : `Chemie, Elektronik, Elastomer, Tribologie ${berufInfo}`
        }
        const entrySST ={
        "zeit": "2014-2015",
        "name" : "Praktikant & Ingenieur / SST Prof. Dr.-Ing Stoll & Partner Ingenieurgesellschaft GmbH (Aachen)",
        "keyPoints" : ["Surpac", "Whittle", "Micromine", "Matlab", "Surfer", "Excel","Microsoft Projekt"],
        "description" : `Datenaufbereitung zur Volumen- oder Entfernungsberechnung,Erstellung von Wirtschaftsprognosen basierend auf statistischen Bohrdaten`
    }
        const entryAnadolu ={
        "zeit": "2012-2014",
        "name" : "Ingenieur für Informationstechnologien / Anadolu Akademi İş sağlığı ve Güvenliği Eğitim Danışmanlık Eğitim Mühendislik Hizmetleri(Istanbul)",
        "keyPoints" : ["Moddle", "Joomla", "Drupal"],
        "description" : `Einrichtung des Fernunterrichtssystems mit Moodle, Produktion von Online-Inhalten`
    }
    return(
        <div className='job-history'>
            <h1>{this.props.title}</h1> 
            <p>{this.props.description}</p>
            <div className='history'>
                <HistoryEntry currentEntry={entryFreelancer}/>
                <HistoryEntry currentEntry={entryAlpaEndustri}/>
                <HistoryEntry currentEntry={entrySST}/>
                <HistoryEntry currentEntry={entryAnadolu}/>
            </div>
        </div>
    )
    }
}
class Studium extends Component{
    render(){
        // const educationHistory = "Studium";
        const entryRwth ={
            "zeit": "2014-2015",
            "name" : "RWTH Aachen Universität",
            "keyPoints" : [],
            "description" : `M.Sc., BBK3-Bergbau Fakultät-Bergbau Ingenieur`
        } 
        const entryItu ={
            "zeit": "2012-2018",
            "name" : "Istanbul Technik Universität",
            "keyPoints" : [],
            "description" : `M.Sc., Bergbau Fakultät-Bergbau Ingenieur`
        } 
        const entryAnadolu ={
            "zeit": "2012-2013",
            "name" : "Anadolu Akademi",
            "keyPoints" : [],
            "description" : `Sicherheitsingenieur`
        }
        const entryIu ={
            "zeit": "2006-2011",
            "name" : "Istanbul Universität",
            "keyPoints" : [],
            "description" : `B.Sc., Bergbau Fakultät-Bergbau Ingenieur`
        }
        const entryGymnasium ={
            "zeit": "2002-2005",
            "name" : "Istek Bilge Kagan Naturwissenschaft Gymnasium",
            "keyPoints" : [],
            "description": ""
        }

        return(
            <div className='education-history'>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div className='history'>
                    <HistoryEntry currentEntry={entryRwth}/>
                    <HistoryEntry currentEntry={entryItu}/>
                    <HistoryEntry currentEntry={entryAnadolu}/>
                    <HistoryEntry currentEntry={entryIu}/>
                    <HistoryEntry currentEntry={entryGymnasium}/>                  

                </div>
            </div>
        )
    }
}
class FahigkeitundKentnisse extends Component{
    render(){
        // const skills = "Fahigkeit und Kentnisse";
        const entrySoftware ={
            "name":"Software",
            "keyPoints":["Microsoft Excel","Word","Powerpoint","Project","Adobe Photoshop","Illustrator","Corel Draw","3DsMax","Autocad","Micromine","Surpac","Whittle","Surfer"],
            "description": ""
        }
        const entrySprachen ={
            "name":"Sprachen",
            "keyPoints":["Turkisch-MutterSprache","Englisch-C1", "Deutsch-B2"],
            "description":""
        }
        const entryFührerschein ={
            "name": "Führerschein",
            "keyPoints":["A2", "B"],
        }
        return(
            <div className='fahigkeit-haupt'>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>

                <div className='fahigkeit'>
                   <HistoryEntry currentEntry = {entrySoftware}/>
                   <HistoryEntry currentEntry = {entrySprachen}/>
                    <HistoryEntry currentEntry = {entryFührerschein}/>
                </div>
            </div>
        )
    }
}
class Hobbys extends Component{
    render(){
        // const hobbys = "Interessen";
    
        const entryMusic ={
            "name": "Musik",
            "keyPoints":["Gitarre spielen","Klarinette spielen"],
            "description":`Musik muss das Herz berühren ${beisipiel}`
        }    

        const entrySport ={
            "name": "Sport",
            "keyPoints":["Eishockey Spielen", "Laufen", "Fahrrad Fahren"],
            "description" :`Sport ist meine Lebensphilosophie ${beisipiel}`
        }
        
            return (
                <div className="hobbys">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
    
                    <div className='history'>
                        <HistoryEntry currentEntry ={entryMusic}/>
                        <HistoryEntry currentEntry ={entrySport}/>
                    </div>
                </div>
            ) 
        }
    
}
class History extends Component {
    render(){
        return(
            <div className="blink">
                <Beruf title="Beruf Erfahrung" description={""} />
                <Studium title="Studium" description={beisipiel} />
                <FahigkeitundKentnisse title="Fahigkeit und Kentnisse" description="Meine Skills" />
                <Hobbys title="Hobbies" description="Meine Hobbies" />
            </div>
        )
    }
}
export default History;
