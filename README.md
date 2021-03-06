# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.



# TODOs #
- [✓] add **sign in** and **Sign up for free** buttons in header
- [✗] make table of content slider visible 
- [✗] make changing font and color super easy
- [✗] convert to typescript
- [✗] convert to styled components in sections (scss is still needed to overide global docusaurus stuff)?
- [✗] converge on deploy pipeline and also how to keep it up to date on original repo 



# Setup #

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


# Changelog #

We use release-please for versoning and automatic changelog. 
By utilizing  [Conventional Commit messages](https://www.conventionalcommits.org/en/v1.0.0/) it generates release PRs.


# Costumization #


## General ##
If we only want to show docs (and not blogs) we could:
- remove all blogs in the **blogs** folder
- remove the blog item from the configuration so that the link dissapears

If we also want to remove the homepage and just have the documentatoin: 
- go to intro.md and add `slug: /`  to the frontmatter
- delete the pages/index.js


## Styling and tools  ##

We use a mix of scss and styled components for this project template. We have to use pure css/scss for overriding docusaurus theme, and then for additional content we use styled components

## Removing header buttons ##
Header buttons are defined in the **docusaurus.config.js** file under **themeConfig.navbar.items**

## Changing theme colors ##

There is primarily 3 colors you would want to change: 
- primary color
- text color
- background color
- sidebar color
- 

