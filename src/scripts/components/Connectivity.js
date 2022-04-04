const status = navigator.onLine;

export default {
    render(){
        return `
        <span class="text-small">Status: 
            <span id="connectivity-status">${status ? "Connected" : "Disconnected"}</span>
        </span>
        `;
    },
}