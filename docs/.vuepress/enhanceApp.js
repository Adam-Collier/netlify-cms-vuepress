const Admin = () => import("./components/Admin");

export default ({ Vue, options, router, siteData }) => {
    router.addRoutes([
        {
            path: "/admin",
            component: Admin
        }
    ]);
    siteData.pages.push({
        key: "admin",
        path: "/admin",
        title: "Admin",
        frontmatte: {}
    })
    console.log("this is enhanced");
    console.log(siteData.pages);
};