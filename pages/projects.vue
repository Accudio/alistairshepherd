<template>
  <div id="page" class="page">
    <section class="page-content">
      <h1>Projects</h1>
      <p>
        These are a few of my best and most recent projects. I like experimenting with different technologies and libraries, most recently in JavaScript frameworks like Vue.js and React.js.
      </p>
      <p>
        My open-source projects can be found on <a href="https://github.com/accudio">GitHub</a>, and you can find more information about my professional experience and work on the <nuxt-link to="/work">Work page</nuxt-link>.
      </p>
      <div class="projects">
        <ul>
          <li>
            <h2><a href="https://mytopspotify.io">My Top for Spotify</a> &mdash; Web App to display your top Spotify tracks and artists</h2>
            <p>My Top for Spotify is a Web App I created in <a href="https://reactjs.org/">React.js</a> to show a users most played artists and tracks using the <a href="https://spotify.com">Spotify</a> API. Although similar websites already, I wanted MTfS to stand out in design and appearance and also include improvements in user experience.</p>
            <p>It also served to broaden my experience in embracing the power of dynamic JavaScript apps, in developing a authentication server with <a href="https://nodejs.org">node.js</a> and deploying serverless on <a href="https://aws.amazon.com/#">AWS</a>. Source available on Github: <a href="https://github.com/accudio/mytopforspotify-webclient">Web Client</a>, <a href="https://github.com/accudio/mytopforspotify-server">Server</a>.</p>
          </li>
          <li>
            <h2><a href="https://responsive.accudio.com">Accudio Responsive</a> &mdash; Simple Vue.js app presenting websites on a range of devices</h2>
            <p>For quickly producing an attractive presentation demonstrating the responsive nature of a prototype website, I created a simple web app, originally using PHP but since changed to use <a href="https://vuejs.org/">Vue.js</a> and open-sourced. <a href="https://github.com/accudio/accudio-responsive">Source available on GitHub</a>.</p>
          </li>
          <li>
            <h2><a href="https://github.com/accudio/monolith-koken">Monolith Koken</a> &mdash; Bold theme for the photographer's CMS, Koken</h2>
            <p>For a client looking for a bold website with lots of contrast to show off their photography, I built Monolith for the Content Management System <a href="http://koken.me/">Koken</a>. Monolith is a open-source <a href="https://getbootstrap.com/">Bootstrap 4</a> based theme featuring loads of options for layout and style, template settings, and features for displaying custom content on each page. <a href="https://github.com/accudio/monolith-koken">Source available on GitHub</a>.</p>
          </li>
          <li>
            <h2><a href="https://github.com/accudio/accudio-tweaks">Accudio Tweaks</a> &mdash; Misc functionality and security tweaks for Wordpress</h2>
            <p>With my work as <a href="https://accudio.com">Accudio</a> I regularly work on websites using the CMS <a href="https://wordpress.org">Wordpress</a>. It doesn't necessarily behave exactly as I would like however, so I have created a plugin that allows me to easily make common tweaks to the administration panel, to 3rd party plugin behaviour, and tightening up site security. <a href="https://github.com/accudio/accudio-tweaks">Source available on GitHub</a>.</p>
          </li>
          <li>
            <h2><a href="https://github.com/accudio/sphider-bootstrap4">Sphider BS4</a> &mdash; Minimal theme for PHP-based spider and search engine Sphider</h2>
            <p><a href="http://www.sphider.eu">Sphider</a> is a PHP-based spider and search engine you can host yourself easily. It unfortunately has a rather dated default interface due to it's age, but does have a theme system that allowed me to build a minimal theme based on <a href="https://getbootstrap.com/">Bootstrap 4</a> that integrates easily and elegantly with modern websites using an iFrame. <a href="https://github.com/accudio/sphider-bootstrap4">Source available on GitHub</a>.</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$bus.$emit('page-mount', 1)
  }
}
</script>

<style lang="scss" scoped>
.page .page-content .projects {
  ul {
    list-style: none;
    padding: 0;

    li {
      display: block;
      padding: 2rem 0;
      position: relative;
      text-align: center;

      h2, p {
        margin-bottom: 1rem !important;
      }
    }
  }
}
</style>
