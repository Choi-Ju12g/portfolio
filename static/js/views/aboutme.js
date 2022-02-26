import AbstractView from './AbstractView.js';
import { u } from "../lib.js";


export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('About Me');
    }
    
    async getHtml() {
        return `
            <img src="/static/img/profile.jpg" alt="My profile" width="150" height="150">
            <h2>누구나 할 수 있지만 아무나 못하는 일을 할 개발자, 최정우 입니다.</h2>
        `;
    }
}