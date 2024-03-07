<template>
    <div>
      <label :for="label">{{ label }}</label>
      <input type="number" :value="value" @input="$emit('input', $event.target.value)" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      value: Number,
    },
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente InputField */
  </style>
  