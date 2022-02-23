import AbstractView from './AbstractView.js';
import { u } from "../lib.js";
import porfile from "../img/porfile.jpg"

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('About Me');
    }
    
    async getHtml() {
        return `
            <img src="./img/profile.jpg" alt="My profile" width="200" height="200">
            <h1>This is About_Me Page</h1>
        `;
    }
}