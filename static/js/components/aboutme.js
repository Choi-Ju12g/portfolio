export default class {
    constructor() {
        document.title = "AboutMe";
    }
    async getHtml() {
        return `
            <h1>This is About Me</h1>
        `;
    }
}