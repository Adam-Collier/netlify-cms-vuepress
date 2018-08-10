const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

fs.readdir('./docs/.vuepress/dist/assets/css', (err, files) => {
    if (err) console.log(err);

    if (files.length) {
        let cssScript = `<script>CMS.registerPreviewStyle("/assets/css/${files[0]}")</script>`;
        let adminPath = './docs/.vuepress/dist/admin/index.html'
        let configIndex = fs.readFileSync(adminPath, 'utf-8')

        console.log(configIndex);

        var { document } = new JSDOM(configIndex).window;
        document.querySelector('body').insertAdjacentHTML("beforeend", cssScript);

        let adminHTML = document.documentElement.outerHTML;

        console.log(adminHTML)

        fs.writeFileSync(adminPath, adminHTML, "utf-8");

        console.log("Successfully added CSS")
    }

    console.log("the styles script has ran");
})