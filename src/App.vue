<script setup>
import { reactive } from 'vue';
import 'source-map-js';
import 'bootstrap/dist/css/bootstrap.min.css';
</script>

<template>
    <div id="app">
      <h1>Calculadora Aritmética</h1>
  
      <div>
        <label for="num1">Número 1:</label>
        <input type="number" v-model="num1" @input="calculate">
      </div>
  
      <div>
        <label for="num2">Número 2:</label>
        <input type="number" v-model="num2" @input="calculate">
      </div>
  
      <div>
        <label for="operation">Operação:</label>
        <select v-model="operation" @change="calculate">
          <option value="add">Adição (+)</option>
          <option value="subtract">Subtração (-)</option>
          <option value="multiply">Multiplicação (*)</option>
          <option value="divide">Divisão (/)</option>
        </select>
      </div>
  
      <div>
        <label for="result">Resultado:</label>
        <input type="text" v-model="result" readonly>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        num1: 0,
        num2: 0,
        operation: 'add',
        result: 0
      };
    },
    methods: {
      calculate() {
        switch (this.operation) {
          case 'add':
            this.result = this.num1 + this.num2;
            break;
          case 'subtract':
            this.result = this.num1 - this.num2;
            break;
          case 'multiply':
            this.result = this.num1 * this.num2;
            break;
          case 'divide':
            this.result = this.num1 / this.num2;
            break;
          default:
            this.result = 0;
        }
      }
    }
  };
  </script>
  
  <style>
  
  #app {
    max-width: 400px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    color: aliceblue;
    background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-city-with-large-pyramids-and-clouds-in-the-background-image_2943511.jpg);
   background-size: cover;
  }
  
  div {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  </style>
  