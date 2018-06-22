const brain = require('brain.js');
const retro = require('./index.js');
const net = new brain.NeuralNetwork();

// net.train([
//   { input: { doseA: 0 }, output: { indicatorA: 0 } },
//   { input: { doseA: 0.1 }, output: { indicatorA: 0.02 } },
//   { input: { doseA: 0.2 }, output: { indicatorA: 0.04 } },
//   { input: { doseA: 0.3 }, output: { indicatorA: 0.06 } },
//   { input: { doseA: 0.4 }, output: { indicatorA: 0.08 } },
//   { input: { doseA: 0.5 }, output: { indicatorA: 0.10 } },
//   { input: { doseA: 0.6 }, output: { indicatorA: 0.12 } },
//   { input: { doseA: 0.7 }, output: { indicatorA: 0.14 } },
// ], {
//   iterations: 1e6,
//   errorThresh: 0.00001
// });

net.fromJSON({"sizes":[1,3,1],"layers":[{"doseA":{}},{"0":{"bias":-0.7720749378204346,"weights":{"doseA":-6.819720268249512}},"1":{"bias":0.2317514568567276,"weights":{"doseA":-1.4340121746063232}},"2":{"bias":-0.34450986981391907,"weights":{"doseA":-2.9449453353881836}}},{"indicatorA":{"bias":-1.0124520063400269,"weights":{"0":-5.02399206161499,"1":-1.69333016872406,"2":-3.1710503101348877}}}],"outputLookup":true,"inputLookup":true,"activation":"sigmoid","trainOpts":{"iterations":1000000,"errorThresh":0.00001,"log":false,"logPeriod":10,"learningRate":0.3,"momentum":0.1,"callbackPeriod":10}});

const input = retro({ indicatorA: 0.07 }, net);

console.log(input.doseA);
