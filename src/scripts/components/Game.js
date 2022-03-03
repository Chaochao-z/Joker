import {store} from "../store/store";

export default {
    render() {
        return `
            <hr>
            <button id="counterBtn">+1</button>
            <span s-bind="count"></span><br>
            <input type="text" id="input">
            <p s-bind="text"></p>
        `;
    },
    data: {
        count: 0,
        text: 'Yes we can',
    },
    mounted(data) {
        document.getElementById("counterBtn").addEventListener('click', () => {
            data.count++;
        })
        document.getElementById('input').addEventListener('input', (e) =>{
            data.text = e.target.value;
        })
    }
}