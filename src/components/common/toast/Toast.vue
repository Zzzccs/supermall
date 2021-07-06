<template>
  <div class="toast" v-show="isshow"> 
      {{message}}
  </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: ''
        },
        isshow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .toast {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>