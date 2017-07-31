<template>
  <section class="card">
    <!-- card content -->
    <div class="content">
      <div class="header">
        {{ todo.title }}
      </div>
      <div class='meta'>
        {{ todo.project }}
      </div>
      <!-- todo edit icon -->
      <div class="extra">
        <span class="right">
          <i class="edit icon">Edit</i>
        </span>
      </div>
      <!-- todo options -->
      <div v-show="todo.done">
        Completed
      </div>
      <div v-show="!todo.done">
        Complete
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
  export default {
    props: ['todo']
  }
</script>

<style>

</style>
