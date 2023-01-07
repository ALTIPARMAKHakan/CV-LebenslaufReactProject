
//Hey folgendes Logo brauch ich lade das mal
import logo from './logo.svg';

//Hier sind die spezifizierten StyleAnweisungen fuer die App
import './styles/styles.css'

function App() {
  return (

    //Hier drin wird die React App Abgebildet
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Grundstruktur eine React-App</h1>
        <h2>React-App in VS-Code genererier</h2>
        <ol>
          <li>Sicherstellen das NodeJs und Npm installiert sind</li>
          <li>In VSCode einen neuen Ordner anlegen</li>
          <li>Terminal öffnen</li>
          <li>
            Eine neue React-App mit folgendem Befehl erzeugen:<br></br>
            <code>npx create-react-app name-des-projektes-klein-geschrieben</code>
          </li>
        </ol>

        <h2>Struktur und Aufbau</h2>
        
        <ul>
          <li>
            public: Ordner der auf dem Webserver oeffentlich zugänglich gemacht wird
            <ul>
              <li>Anlaufpunkt für die URL index.html (http://localhost:3000/)</li>
              <li>manifest.json für mobile Endgeräte</li>
              <li>robots.txt fuer SEO - WebCrawler</li>
            </ul>
          </li>
          <li>
            src: Ordner der die JavaScript Dateien einghaelt nicht direkt zugänglich
            <ul>
              <li>index.js: Startet das Rendern also den Aufbau aller React-App Komponentent</li>
              <li>index.css: Globale Style Anweisungen fuer die Komplette React-App</li>
              <li>App.js: Aufbau der App - Komponenente</li>
              <li>App.css: Style Anweisungen speziell fuer die App-Komponente</li>
            </ul>
          </li>
        </ul>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-Dokumentation
        </a>
      </header>
    </div>
  );
}

export default App;
