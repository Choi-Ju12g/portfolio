import Home from "./components/home.js";
import Skills from "./components/skills.js";
import AboutMe from "./components/aboutme.js";

const router = async () => {
    const routes = [
    {path:'/index.html', view: Home},
    {path:'/AboutMe', view: AboutMe},       
    {path:'/Skills', view :Skills},
    {path:'/Projects', vie:() => console.log("projects")},
    {path:'/RoadMap', view:() => console.log("roadmap")},       
    {path:'/History', view:() => console.log("history")},        
    ];

    const pageMatches = routes.map((route) => {
        return {
          route: route,
          isMatch: location.pathname === route.path,
        };
      });  
    
      
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    console.log(pageMatches);
    console.log(match.route.view());
}


// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
    router();
});

window.addEventListener("popstate",router);