import Vue from "vue";

Vue.filter("rand", function(value) {
  // Using a template literal here, that's why there are two dollar signs.
  // The first is an actual dollar.
  return `ZAR${parseFloat(value).toFixed(2)}`;
});
