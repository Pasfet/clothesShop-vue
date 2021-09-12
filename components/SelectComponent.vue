<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      selected: this.default !== undefined
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null,
      open: false
    };
  },
  mounted () {
    this.$emit('input', this.selected);
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100px;
  text-align: left;
  outline: none;
  height: 25px;
  line-height: 25px;
}

.custom-select .selected {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  color: #000;
  padding-left: 15px;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #f16d7f;
  border-radius: 5px 5px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 12px;
  right: 10px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #000 transparent transparent transparent;
}

.custom-select .items {
  color: #000;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #f16d7f;
  border-left: 1px solid #f16d7f;
  border-bottom: 1px solid #f16d7f;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #000;
  padding-left: 15px;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #f16d7f;
  color: #fff;
}

.selectHide {
  display: none;
}
</style>
