const Admin = () => import("./components/Admin");

export default ({ Vue, options, router, siteData }) => {
    siteData.pages.push({
        key: "admin",
        path: "/admin",
        title: "Admin",
        frontmatter: {}
    })

    router.addRoutes([
        {
            path: "/admin",
            component: Admin
        }
    ]);
    console.log(siteData.pages);
};