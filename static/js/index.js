import Home from "./views/home.js";
import Skills from "./views/skills.js";
import AboutMe from "./views/aboutme.js";
import NotFound from "./views/NotFound.js";
import Projects from "./views/projects.js"
import RoadMap from "./views/roadmap.js";
import History from "./views/history.js";
import { u } from "./lib.js";

const pathToRegex = path =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = match => {
  const values = match.result.slice(1);

  const keys = Array.from(
    match.route.path
      .matchAll(/:(\w+)/g))
      .map(result => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [
        key,
        values[i]
      ];
    })
  );
};

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
    const routes = [
    {path:u('/'), view: Home},
    {path:u('/aboutme'), view: AboutMe},       
    {path:u('/skills'), view :Skills},
    {path:u('/projects'), view: Projects},
    {path:u('/roadmap'), view:RoadMap},       
    {path:u('/history'), view:History},        
    ];

    const pageMatches = routes.map((route) => {
        return {
          route: route,
          //isMatch: location.pathname === route.path,
          isMatch: location.pathname.match(pathToRegex(route.path))
        };
      });  
    
      
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch !== null);
    // console.log(pageMatches);
    // console.log(match.route.view());
    // if(!match){
    //     match = {
    //         route: location.pathname,
    //         isMatch: true,
    //     };
    //     const page = new NotFound();
    //     document.querySelector("#root").innerHTML = await page.getHtml();
    // }else{
    //     const page = new match.route.view();
    //     document.querySelector("#root").innerHTML = await page.getHtml();
    // }
    if (!match) {
        match = {
          route: routes[0],
          isMatch: [
            location.pathname
          ]
        };
      }
    
      const view = new match.route.view(getParams(match));
    
      document.querySelector('#root').innerHTML = await view.getHtml();
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
