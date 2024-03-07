<template>
  <div id="calculator">
    <h1>Calculadora Aritmética</h1>

    <InputField label="Número 1:" :value="num1" @input="updateNum1" />
    <InputField label="Número 2:" :value="num2" @input="updateNum2" />
    <SelectField label="Operação:" :value="operation" @change="updateOperation">
      <option value="add">Adição (+)</option>
      <option value="subtract">Subtração (-)</option>
      <option value="multiply">Multiplicação (*)</option>
      <option value="divide">Divisão (/)</option>
    </SelectField>

    <div>
      <label for="result">Resultado:</label>
      <input type="text" v-model="result" readonly>
    </div>
  </div>
</template>

<script>
import InputField from './InputField.vue';
import SelectField from './SelectField.vue';

export default {
  components: {
    InputField,
    SelectField,
  },
  data() {
    return {
      num1: null,
      num2: null,
      operation: 'add',
      result: null,
    };
  },
  methods: {
    updateNum1(event) {
      this.num1 = event.target.value;
      this.calculate();
    },
    updateNum2(event) {
      this.num2 = event.target.value;
      this.calculate();
    },
    updateOperation(event) {
      this.operation = event.target.value;
      this.calculate();
    },
    calculate() {
      const parsedNum1 = parseFloat(this.num1);
      const parsedNum2 = parseFloat(this.num2);

      if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
        switch (this.operation) {
          case 'add':
            this.result = parsedNum1 + parsedNum2;
            break;
          case 'subtract':
            this.result = parsedNum1 - parsedNum2;
            break;
          case 'multiply':
            this.result = parsedNum1 * parsedNum2;
            break;
          case 'divide':
            this.result = parsedNum1 / parsedNum2;
            break;
          default:
            this.result = null;
        }
      } else {
        this.result = null;
      }
    },
  },
};
</script>

<style scoped>
#calculator {
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
