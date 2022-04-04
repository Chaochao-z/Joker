const status = navigator.onLine;

export default {
    render(){
        return `
        <span>Connexion: 
            <span id="connectivity-status">${status ? "Connected" : "Disconnected"}</span>
        </span>
        `;
    },
}