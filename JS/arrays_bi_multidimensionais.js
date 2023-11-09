let temperaturasDoDia = [];

temperaturasDoDia[0] = 
[25, 28, 30, 26],
[24, 27, 29, 25],
[23, 26, 28, 24]

temperaturasDoDia[1] =
[30, 31, 30, 35],
[24, 27, 29, 25],
[23, 26, 28, 24]


console.log(temperaturasDoDia)

// exibe em formato de matriz
for (let i = 0; i < temperaturasDoDia.length; i++) {
    for (let j = 0; j < temperaturasDoDia[i].length; j++) {
      console.log(temperaturasDoDia[i][j]);
    }
  }
