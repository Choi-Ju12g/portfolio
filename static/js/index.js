const router = async () => {
    const routes = [
    {path:'/index.html', view: () => console.log("home")},
    {path:'/AboutMe', view:() => console.log("aboutme")},       
    {path:'/Skills', view :() => console.log("skills")},
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
}


// document.addEventListener("DOMContentLoaded", () => {
//     document.body.addEventListener("click", (e) => {
//         if (e.target.matches("[data-link]")) {
//             e.preventDefault();
//             history.pushState(null, null, e.target.href);
//             router();
//         }
//     });
//     router();
// });

router();