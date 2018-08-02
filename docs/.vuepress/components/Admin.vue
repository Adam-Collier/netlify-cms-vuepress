<template>
  <div></div>
</template>

<script>
// import CMS from "netlify-cms";
// import "netlify-cms/dist/cms.css";
// import netlifyIndentityWidget from "netlify-identity-widget";

export default {
  created() {
    // window.netlifyIndentityWidget = netlifyIndentityWidget;
    // netlifyIndentityWidget.init();

    let netlifyCMS = document.createElement("script");
    netlifyCMS.setAttribute(
      "src",
      "https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"
    );
    document.body.appendChild(netlifyCMS);

    let identityWidget = document.createElement("script");
    identityWidget.setAttribute(
      "src",
      "https://identity.netlify.com/v1/netlify-identity-widget.js"
    );
    document.head.appendChild(identityWidget);

    if (webpackHotUpdate) {
      console.log("In development mode");
    }
  }
};
</script>