const brain = require('brain.js');
const readline = require('readline');

const net = new brain.recurrent.LSTM();

const trainingData = [
  { input: 'Hoje foi um dia muito ruim, me sinto cansado e estressado.', output: 'dia ruim' },
  { input: 'Estou me sentindo péssimo, nada deu certo.', output: 'dia ruim' },
  { input: 'Hoje foi um dia excelente, me sinto muito bem.', output: 'dia bom' },
  { input: 'Estou feliz, tudo correu como planejado.', output: 'dia bom' }
];

net.train(trainingData, {
  iterations: 2000,
  log: true,
  logPeriod: 100,
  learningRate: 0.01
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Como foi seu dia hoje? ', (answer) => {
  
  if (result.includes('dia bom')) {
    console.log('Baseado no que você disse, parece que você teve um dia bom.');
  } else if (result.includes('dia ruim')) {
    console.log('Baseado no que você disse, parece que você teve um dia ruim.');
  } else {
    console.log('Não foi possível identificar corretamente seu dia.');
  }
  
  rl.close();
});
