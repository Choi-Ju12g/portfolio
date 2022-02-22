import AbstractView from './AbstractView.js';
import { u } from "../lib.js";

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('RoadMap');
    }
    
    async getHtml() {
        return `
            <h1>This is RoadMap Page</h1>
        `;
    }
}