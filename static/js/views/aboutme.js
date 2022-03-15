import AbstractView from './AbstractView.js';
import { u } from "../lib.js";


export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('About Me');
    }
    
    async getHtml() {
        return `
        <div id="aboutMe_container">
        <img id="profile" src="./static/img/profile.jpg" alt="my profile" width="120" height="120">
        <h2>누구나 할 수 있지만 아무나 못 할 일을 할 개발자, 최정우 입니다.</h2>
        <h3 id="little_title">About Me</h3>
        <div id="aboutMe_wrap">
          <div id="introduction">
            <div>Introduction</div>
            <div id="explain_me">
              <ul>반갑습니다. 신입 프론트 개발자 최정우입니다.</ul>
              <ul>센스 있는 사람이 되고싶었는데 개발자가 딱 센스 있는 직업이었습니다.</ul>
              <ul>열심히 할 필요 없다. 그냥 하면 된다.</ul>
              <ul>이유가 없는 건 없다. 사소한 것에도 관심을 갖자.</ul>
              <ul>팀 내 문화는 개개인의 능력만큼이나 중요하다.</ul>
            </div>
          </div>
          <div id="contactMe">
            <div>Contact Me</div>
            <div id="contact_channel">
              <ul>E-mail | choi-ju12g@naver.com</ul>
              <ul>Github | https://github.com/Choi-Ju12g</ul>
              <ul>Blog | https://https://velog.io/@choi-ju12g</ul>  
            </div>
          </div>
        </div>
      </div>
        `;
    }
}