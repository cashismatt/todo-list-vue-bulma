<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <footer>
      <div class="container">
        <p class="subtitle is-6 is-small">built with <strong><a target="_blank" href="https://vuejs.org/">vue.js</a></strong> by <strong><a target="_blank" href="https://github.com/josheche">josheche</a></strong></p>
      </div>
    </footer>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  },
  // data available to the template
  data () {
    return {
      todos: [{
        title: 'Todo 1',
        project: 'Project 1',
        done: false
      }, {
        title: 'Todo 2',
        project: 'Project 2',
        done: false
      }, {
        title: 'Todo 3',
        project: 'Project 3',
        done: true
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
