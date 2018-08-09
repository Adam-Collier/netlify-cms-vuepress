const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

fs.readdir('./docs/.vuepress/dist/assets/css', (err, files) => {
    if (files.length) {
        let cssScript = `<script>CMS.registerPreviewStyle("/assets/css/${files[0]}")</script>`;
        let adminPath = './docs/.vuepress/public/admin/index.html'
        let configIndex = fs.readFileSync(adminPath, 'utf-8')

        var { document } = new JSDOM(configIndex).window;
        document.querySelector('script').insertAdjacentHTML("afterend", cssScript);

        let adminHTML = document.documentElement.outerHTML;

        fs.writeFileSync(adminPath, adminHTML, "utf-8");

        console.log("Successfully added CSS")
    }
})