import AbstractView from './AbstractView.js';
import { u } from "../lib.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Home');
    }
    
    async getHtml() {
        return `
            <h1>This is Home Page</h1>
        `;
    }
}