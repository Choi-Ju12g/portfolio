import AbstractView from './AbstractView.js';
import { u } from "../lib.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('About Me');
    }
    
    async getHtml() {
        return `
            <h1>This is About_Me Page</h1>
        `;
    }
}