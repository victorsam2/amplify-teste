function changeBackgroundColor() {
    const element = document.getElementById('changeColorElement');
  
    // Gera uma cor aleatória em formato hexadecimal
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
    // Altera a cor de fundo do elemento
    element.style.backgroundColor = randomColor;
  }
  