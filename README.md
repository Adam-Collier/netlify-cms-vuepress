# Netlify CMS for Vuepress

This project aims to help you get Netlify's CMS set up and running with Vuepress as easily and smoothly as possible. The file structure and a simple configuration in `docs/.vuepress/public/admin/config.yml` has been created for you. There are a few things you will need to set up in Netlify which we will run through below:

## Identity and Git Gateway

Netlify offers a built-in authentication service called Identity. In order to use it, you'll need to connect your site repo with Netlify. 

Netlify's Identity and Git Gateway services allow you to manage CMS admin users for your site without requiring them to have an account with your Git host or commit access on your repo. From your site dashboard on Netlify:

1. Go to Settings > Identity, and select Enable Identity service.

2. Under Registration preferences, select Open or Invite only. In most cases, you'll want only invited users to access your CMS, but if you're just experimenting, you can leave it open for convenience.

3. If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under External providers.

4. Scroll down to Services > Git Gateway, and click Enable Git Gateway. This will authenticate with your Git host and generate an API access token.

## Add the Netlify Identity Widget

With the backend set to handle authentication, now you need a frontend interface to connect to it. The open source Netlify Identity Widget is a drop-in widget made for just this purpose.

To make this process as simple as possible for Vuepress we are going to add the widget in via Netlify's snippet injection.



Go into Settings > Build & deploy > Snippet injection and add the following before `</head>`:

`<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>`


When a user logs in with the Netlify Identity widget, they will be directed to the site homepage with an access token. In order to complete the login and get back to the CMS, we'll need to redirect the user back to the /admin/ path. To do this, create another snippet add the following script before `</body>`

```
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

Now you should be all set up. Enjoy using Vuepress with the Netlify CMS!




