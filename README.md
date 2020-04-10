# vue-boilerplate-vuex

<h2>Description</h2>
<p>To make our projects we almost all the times it’s the vue create appName that we use to create an app with no build configuration. Or we just make our own simple boilerplate from scratch.</p>

## it includes: 📝
<ul>
  <li>Files structure</li>
  <li>Routes - vue-router</li>
  <li>Route guards</li>
  <li>Axios</li>
  <li>Interceptors</li>
  <li>Vuex</li>
  <li>Translation (en, ar) - vue-i18n</li>
  <li>Bootstrap as UI framework example </li>
</ul>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

<h2>Structure</h2>
<h4>🗃Assets</h4>
<ul>
  <li>Here you can put your assets like (images, fonts, icons, ...etc).</li>
</ul>
<hr>
<h4>🗃Components</h4>
<ul>
  <li>Here you will be able to develop you reusable components like (button, input, card, ...etc).</li>
  <li>Each component file will contain template, script, and style tags</li>
</ul>
<hr>
<h4>🗃views</h4>
<ul>
  <li>These folders will represent your pages or views which should contain your small components.</li>
  <li>Each View file will contain template, script, and style tags</li>
</ul>
<hr>
<h4>🗃Network</h4>
<ul>
  <li>That contains
    <ol>
      <li><strong>base.js:</strong> put your apis instance and interceptor methodes usage there.</li>
      <li><strong>Interceptors:</strong> to handle each request || response || errors from apis</li>
    </ol>
  </li>
</ul>
<hr>
<h4>🗃Routes</h4>
<ul>
  <li>Put your app routes in index.js file.</li>
  <li>You will find also Guards.js file that contain check configurations for our public/private routes.</li>
</ul>
<hr>
<h4>🗃SCSS</h4>
<ul>
  <li>Here you could put your general styles (general || variables || mixins ...etc).</li>
</ul>
<hr>
<h4>🗃Store</h4>
<ul>
  <li><strong>That contains your modules</strong></li>
    <ul>
      <li>Each module contains (state && getters && actions && mutations) that manage that module in Vuex store</li>
    </ul>
  <li>index.js: that combine all modules in Vuex store and allow Vue to use it.</li>
</ul>
<hr>
<h4>🗃Utils</h4>
<ul>
  <li>Here you could put your constants like (base image URL) any other helpers files.</li>
</ul>
<hr>
<h4>🗃main.js</h4>
<ul>
  <li>This file is bootstrap your application.</li>
</ul>
<hr>

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
