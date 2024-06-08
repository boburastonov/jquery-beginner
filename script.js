let x = "Name";
let son = 1001;
let arr = ["index", 1, 3, 5];
let obj = {
  key1: "val1",
  key2: "val2",
};

let heading = $("#heading");
console.log(heading);

let newFunc = () => {
  console.log("Hello World");
};
$(newFunc);
$("[placeholder]").css("color", "blue");

$(document).ready(function(){
  $('.data').load('test.html')
})
