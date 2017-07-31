<template>
  <div id="app">
    <h1>To-Do List</h1>
    <todo-list v-bind:todos="todos"></todo-list>
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
        title: 'Todo 2',
        project: 'Project 2',
        done: false
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
  margin-top: 60px;
}
</style>
