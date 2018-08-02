const Admin = () => import("./components/Admin");

export default ({ Vue, options, router }) => {
    router.addRoutes([
        {
            path: "/admin",
            redirect: "/admin.html",
            component: Admin
        }
    ]);
};