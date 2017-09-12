# {{ name }}

## Usage

### Direct Download / CDN

https://unpkg.com/{{ name }}/dist/{{ name }}

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/{{ name }}@{{ version }}/dist/{{ name }}.js

### NPM

    $ npm install {{ name }}

### Yarn

    $ yarn add {{ name }}


You will have to clone directly from GitHub and build `{{ name }}` yourself if
you want to use the latest dev build.

    $ git clone https://github.com/{{ githubAccount }}/{{ name }}.git node_modules/{{ name }}
    $ cd node_modules/{{ name }}
    $ npm install
    $ npm run build
{{/unless_eq}}


## Getting Started

> We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.


### HTML

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/{{ name }}/dist/{{ name }}.min.js"></script>

<div id="#app">
  <!-- TODO: here the outputs -->
</div>
```

### JavaScript Module

```javascript
// import Vue and {{ classify name }} and then call Vue.use({{ classify name }}).
// import Vue from 'vue'
// import {{ classify name }} from '{{ name }}'
// 
// Vue.use({{ classify name }})

// TODO: here the example

// Now the app has started!
new Vue({
el: '#app' 
})
```

Output the following:

```html
<div id="#app">
  <!-- TODO: here the outputs -->
</div>
```

### :copyright: License

[MIT](http://opensource.org/licenses/MIT)
