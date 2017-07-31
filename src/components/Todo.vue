<template>
  <section class="card">
    <!-- show card content when not edting -->
    <div class="content" v-show="!isEditing">
      <div class="header">
        {{ todo.title }}
      </div>
      <div class='meta'>
        {{ todo.project }}
      </div>
      <!-- edit todo -->
      <div class="edit">
        <button class="button is-outlined" v-on:click="showForm">Edit</button>
      </div>
    </div>
      <!-- show card content when editing -->

      <div class="content edit" v-show="isEditing">
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
            <button class="button" v-on:click="hideForm">Close X</button>
          </div>
        </div>
      </div>

      <!-- todo options -->
      <div class="button is-static" v-show="todo.done">
        Completed
      </div>
      <div class="button is-static" v-show="!todo.done">
        Complete
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
      }
    }
  }
</script>

<style>

</style>
