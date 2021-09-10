window.onload = function (){
  selection();
  paintPixel();
  clearBoard();

    function getSelectedColor(){
      let selectedColor = document.querySelector('.selected');
      let colorCSS = window.getComputedStyle(selectedColor,null).getPropertyValue("background-color");
      return colorCSS;
    };

    function selection(){
      let colorList = document.querySelectorAll('.color');
      for(let index = 0 ; index < colorList.length ; index += 1){
        colorList[index].addEventListener("click", changeSelection);
          function changeSelection(){
          let selectedColor = document.querySelector('.selected');
          selectedColor.className = 'color';
          colorList[index].classList.add("selected");
          getSelectedColor();
        };
      };
    };
    
    function paintPixel(){      
      let allPixels = document.querySelectorAll('.pixel');
      
      for(let index = 0 ; index < allPixels.length ; index += 1){
        allPixels[index].addEventListener("click", paintColor);
        function paintColor(){
          let color = getSelectedColor();
          let pixelSelected = allPixels[index];
          pixelSelected.style.backgroundColor = color;
          console.log(color);
        };
      };
    };

    function clearBoard(){
      let button = document.querySelector('#clear-board');
      button.addEventListener('click', limparBoard);
      function limparBoard(){
        let allPixels = document.querySelectorAll('.pixel');
        for(let index = 0 ; index < allPixels.length ; index += 1){
          let pixel = allPixels[index];
          pixel.style.backgroundColor = 'white'
        }

      };
    };

};


