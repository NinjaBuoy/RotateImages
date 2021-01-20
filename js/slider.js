$(function() {
    var slider = $( "#slider" ).slider({
      min: 1,
      range: false,
      step: .0001,
      max: 10,
      value: 1,
      animate:"slow",
      orientation: "horizontal",
      slide: function( event, ui ) {
        $(".value").text("slider value: " + Math.round(ui.value));
      },
      stop: function( event, ui ) {
        $("#slider").slider('value',Math.round(ui.value));
        console.log(ui);
      }
    });
  });

// const slideValue = document.getElementById("sliderValue").getElementsByTagName("span")[0];
// const inputSlider = document.getElementById("field").getElementsByTagName("input")[0];
// const range = document.getElementById("range");

// // range.onmouseover = ((e) =>{
// //     if(!e) var e = window.event;
// //     e.preventDefault();
// // });
// // range.onmouseout = ((e) =>{
// //     if(!e) var e = window.event;
// //     if(e.preventDefault)    e.preventDefault();
// // });

// inputSlider.oninput = (()=>{
// 	let value = inputSlider.value;
// 	slideValue.textContent = value;
// 	slideValue.style.left = (value/2) + "%";
// 	slideValue.classList.add("show");
// });
// inputSlider.onblur = (()=>{
// 	slideValue.classList.remove("show");
// });

// function getValue(){
//     return inputSlider.value;
// }

