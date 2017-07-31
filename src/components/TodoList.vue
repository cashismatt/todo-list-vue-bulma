<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-large">To-Do List</h1>
          <div class="tabs is-fullwidth">
            <!-- todo stats -->
            <ul>
              <li>
                Completed: {{ todos.filter(todo => {return todo.done === true}).length }}
              </li>
              <li>
                Pending: {{ todos.filter(todo => {return todo.done === false}).length }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- render todo component -->
    <todo v-on:delete-todo="deleteTodo" v-for="todo in todos" v-bind:todo="todo"></todo>
  </div>
</template>

<script type="text/javascript">
  import Todo from './Todo'

  export default {
    props: ['todos'],
    components: {
      Todo
    },
    methods: {
      deleteTodo (todo) {
        const todoIndex = this.todos.indexOf(todo)
        this.todos.splice(todoIndex, 1)
      }
    }
  }
</script>

<style>

</style>
