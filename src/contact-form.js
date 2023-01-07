import { Component } from "react";

class ContactForm extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName : "",
            lastName : "",
            subject :"",
            messageToSend : "",
            infoMessageToShow : "",
        }
    }
    handleSubmit(e){
        e.preventDefault()
        const thankYouMessage =`${this.state.firstName}${this.state.lastName}, vielen Dank für Ihre Nachricht:${this.state.messageToSend}`
        this.setState({infoMessageToShow: thankYouMessage})
    }
    
    onFirstNameChange(e){
    this.setState({firstName: e.target.value})
}
    onLastNameChange(e){
    this.setState({lastName: e.target.value})
}
    onSubjectChange(e){
    this.setState({subject: e.target.value})
}
    onMessageToSendChange(e){
    this.setState({messageToSend: e.target.value})
}
    onInfoMessageToShowChange(e){
    this.setState({infoMessageToShow: e.target.value})
}
    render(){
        return (
            <div class="contact-form-wrapper">
                <h2>Kontakt</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Vorname:</label><br></br>
                    <input type="text"
                        value={this.state.firstName}
                        onChange={this.onFirstNameChange.bind(this)}
                        required
                    /><br></br>

                    <label>Nachname:</label><br></br>
                    <input type="text"
                        value={this.state.lastName}
                        onChange={this.onLastNameChange.bind(this)}
                        required
                    /><br></br>

                    <label>Betreff:</label><br></br>
                    <input type="text"
                        value={this.state.subject}
                        onChange={this.onSubjectChange.bind(this)}
                        required
                    /><br></br>

                    <label>Nachricht:</label><br></br>
                    <textarea type="text"
                        value={this.state.messageToSend}
                        onChange={this.onMessageToSendChange.bind(this)}
                        rows="4"
                        cols="50"   
                        required
                    >
                    </textarea><br></br>
                    <button type= "submit">Senden</button>                   

                </form>
                <div className="infoMessage">
                    {this.state.infoMessageToShow}
                </div>

            </div>

        )
    }
}
export default ContactForm;