$("#setIntoUpperCase").on("click", function (e) {
  var input = $("#inputA").val();
  console.log('input = ', input);
  var lineList = input.split("\n");
  console.log("lineList = {}", lineList);
  var output = '';
  lineList.forEach((item) => {
    if (item !== "" && item) {
      output += item.charAt(0).toUpperCase() + item.substring(1) + "\n";
    }
  })
  $("#inputA").val(output);
})

$("#setIntoUpper").on("click", function (e) {
  var input = $("#inputA").val();
  console.log('input = ', input);
  var lineList = input.split("\n");
  console.log("lineList = {}", lineList);
  var output = '';
  lineList.forEach((item) => {
    if (item !== "" && item) {
      output += item.toUpperCase() + "\n";
    }
  })
  $("#inputA").val(output);
})

$("#setIntoLower").on("click", function (e) {
  var input = $("#inputA").val();
  console.log('input = ', input);
  var lineList = input.split("\n");
  console.log("lineList = {}", lineList);
  var output = '';
  lineList.forEach((item) => {
    if (item !== "" && item) {
      output += item.toLowerCase() + "\n";
    }
  })
  $("#inputA").val(output);
})

$("#entitySet").on("click", function (e) {
  var inputA = $("#inputA").val();
  const inputB = $("#inputB").val();
  console.log('inputA = ', inputA);
  console.log('inputB = ', inputB);

  var lineList = inputA.split("\n");
  console.log("lineList = {}", lineList);
  var output = '';


  lineList.forEach((item) => {
    if (item !== "" && item) {
      output += inputB.replace(/##/g, item) + "\n";
    }
  });


  $("#outputA").val(output);

});

$("#setIntoLowerCase").on("click", function (e) {
  var input = $("#inputA").val();
  console.log('input = ', input);
  var lineList = input.split("\n");
  console.log("lineList = {}", lineList);
  var output = '';
  lineList.forEach((item) => {
    if (item !== "" && item) {
      output += item.charAt(0).toLowerCase() + item.substring(1) + "\n";
    }
  })
  $("#inputA").val(output);
});
