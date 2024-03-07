<template>
    <div>
      <label :for="label">{{ label }}</label>
      <select :value="value" @change="$emit('change', $event.target.value)">
        <slot></slot>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      value: String,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente SelectField */
  </style>
  