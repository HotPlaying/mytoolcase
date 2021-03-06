let $inputCount = $('#inputCount');
let inputCount = $inputCount.val() || 0;

$inputCount.on('change', () => {
  const $input_container = $('#input_container');
  const IdAndClassName = 'input_item';
  let valList = [{}];
  if (inputCount > 0) {
    for (let i = 1; i <= inputCount; i++) {
      const id = `#${IdAndClassName}${i}`;
      valList.push($(id).val());
    }
  }
  $input_container.empty();
  inputCount = $(this).val();
  const tpl = `<textarea 
                 class="${IdAndClassName}" 
                 id="${IdAndClassName}#i#" 
                 placeholder="取值输入框#i#"
               >
               </textarea>`;
  for (var i = 1; i <= inputCount; i++) {
    $input_container.append($(tpl.replace(/#i#/g, i)).val(valList[i] || ''));
  }
});

$('#entitySet').on('click', () => {
  const template = $('#template').val();
  const outputList = [];

  for (var i = 1; i <= inputCount; i++) {
    var valOfInputI = $('#input_item' + i).val();

    var lineList = valOfInputI.split('\n');
    console.log('lineList = ', lineList);

    let regexStr = `#${i}#`;
    const regex = new RegExp(regexStr, 'g');
    console.log('regex = ', regex);

    lineList.forEach((item, index) => {
      item = item || '';
      if (!outputList[index]) {
        outputList.push(template);
      }
      const outputItem = outputList[index].replace(regex, item);
      outputList[index] = outputItem;
      console.log('step[%d], outputList=%o', index, outputList);
    });
  }

  let output = '';
  outputList.forEach((item, index) => {
    if (item) {
      output += item + '\n';
    }
  });

  $('#outputA').val(output);
});
//
// $("#setIntoUpperCase").on("click", function (e) {
//   var input = $("#inputA").val();
//   console.log('input = ', input);
//   var lineList = input.split("\n");
//   console.log("lineList = {}", lineList);
//   var output = '';
//   lineList.forEach((item) => {
//     if (item !== "" && item) {
//       output += item.charAt(0).toUpperCase() + item.substring(1) + "\n";
//     }
//   })
//   $("#inputA").val(output);
//
// })
//
// $("#setIntoLowerCase").on("click", function (e) {
//   var input = $("#inputA").val();
//   console.log('input = ', input);
//   var lineList = input.split("\n");
//   console.log("lineList = {}", lineList);
//   var output = '';
//   lineList.forEach((item) => {
//     if (item !== "" && item) {
//       output += item.charAt(0).toLowerCase() + item.substring(1) + "\n";
//     }
//   })
//   $("#inputA").val(output);
// });
