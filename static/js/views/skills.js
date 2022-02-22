import AbstractView from './AbstractView.js';
import { u } from "../lib.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Skills');
    }
    
    async getHtml() {
        return `
            <h1>This is Skills Page</h1>
        `;
    }
}