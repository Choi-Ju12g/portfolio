import AbstractView from './AbstractView.js';
import { u } from "../lib.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('404 Not Found');
    }
    
    async getHtml() {
        return `
            <h1>404 Not Found Pages</h1>
        `;
    }
}