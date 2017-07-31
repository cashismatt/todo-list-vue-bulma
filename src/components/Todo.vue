<template>
  <section class="section">
    <div class="card" v-show="!isEditing">
      <header class="card-header">
        <p class="card-header-title">
          {{ todo.title }}
        </p>
        <a class="card-header-icon">
          <span class="status">
            <!-- todo status -->
            <a class="button is-success is-small" v-show="!isEditing && todo.done" disabled>
              Completed
            </a>
            <a class="button is-danger is-small" v-on:click="completeTodo(todo)" v-show="!iEditing && !todo.done">
              Pending
            </a>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          {{ todo.project }}
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" v-on:click="showForm">Edit</a>
        <a class="card-footer-item" v-on:click="deleteTodo(todo)">Delete</a>
      </footer>
    </div>
    <!-- show card content when editing -->
    <div class="edit-form box" v-show="isEditing">
      <div class="form">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" v-model="todo.title" />
          </div>
        </div>
        <div class="field">
          <label class="label">Project</label>
          <div class="control">
            <input class="input" type="text" v-model="todo.project" />
          </div>
        </div>
        <div class="close">
          <a class="button is-small" v-on:click="hideForm">Save</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    data () {
      return {
        isEditing: false
      }
    },
    methods: {
      showForm () {
        this.isEditing = true
      },
      hideForm () {
        this.isEditing = false
      },
      deleteTodo (todo) {
        this.$emit('delete-todo', todo)
      },
      completeTodo (todo) {
        this.$emit('complete-todo', todo)
      }
    }
  }
</script>

<style>

</style>
