<template>
  <div class="cell"
       v-on:mouseover="mouseover"
       v-on:mouseleave="mouseleave"
       v-on:click="click"
       :class="{hovering: isHovering}"
  >
    <p><slot>
      {{value}}
    </slot></p>
  </div>

</template>

<script>
import UtilService from "@/services/util-service";

export default {
  name: "PCell",
  data() {
    return {
      isHovering: false,
    }
  },
  props: {
    value: {
      type: String
    }
  },
  methods: {
    mouseover: function(){
      this.isHovering=true
    },
    mouseleave: function(){
      this.isHovering=false
    },
    click: function(){
      UtilService.copyToClipboard(this.value)
    }
  }
}
</script>

<style scoped>

.cell {
  max-height: 40px;
  padding: 5px 5px;
  border-radius: 3px;
  border: 1px solid teal;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hovering{
  background-color: rgba(100, 224, 184, 0.72);
}

</style>