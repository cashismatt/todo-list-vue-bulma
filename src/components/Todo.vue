<template>
  <section class="section">
    <!-- show card content when not edting -->
    <div class="content" v-show="!isEditing">
      <p class="title is-5 is-spaced">
        {{ todo.title }}
      </p>
      <p class='subtitle is-6'>
        {{ todo.project }}
      </p>
      <!-- todo options -->
      <div class="option-buttons">
        <a class="button is-outlined is-small" v-on:click="showForm">Edit</a>
        <a class="button is-outlined is-small" v-on:click="deleteTodo(todo)">Delete</a>
      </div>
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
          <a class="button is-small" v-on:click="hideForm">Close X</a>
        </div>
      </div>
    </div>
    <!-- todo options -->
    <div class="button is-success is-small" v-show="todo.done">
      Completed
    </div>
    <div class="button is-danger is-small" v-show="!todo.done">
      Pending
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
      }
    }
  }
</script>

<style>

</style>
