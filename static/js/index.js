import Home from "./components/home.js";
import Skills from "./components/skills.js";
import AboutMe from "./components/aboutme.js";
import NotFound from "./components/NotFound.js";
import Projects from "./components/projects.js"
import RoadMap from "./components/roadmap.js";
import History from "./components/history.js"

const router = async () => {
    const routes = [
    {path:'/index.html', view: Home},
    {path:'/aboutme', view: AboutMe},       
    {path:'/skills', view :Skills},
    {path:'/projects', view: Projects},
    {path:'/roadmap', view:RoadMap},       
    {path:'/history', view:History},        
    ];

    const pageMatches = routes.map((route) => {
        return {
          route: route,
          isMatch: location.pathname === route.path,
        };
      });  
    
      
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    // console.log(pageMatches);
    // console.log(match.route.view());
    if(!match){
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector("#root").innerHTML = await page.getHtml();
    }else{
        const page = new match.route.view();
        document.querySelector("#root").innerHTML = await page.getHtml();
    }
}


// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});
//window.addEventListener("popstate",router);

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
