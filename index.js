module.exports = function(output, _net) {
  var net = typeof _net.toJSON === 'function' ? _net.toJSON() : _net;
  var i = net.layers.length - 1;
  var layer;
  var input;

  while (i >= 1) {
    layer = net.layers[i];
    input = {};
    var layerKeys = Object.keys(layer);
    var layerIndex = layerKeys.length - 1;
    layerKeys.reverse().forEach(function(id) {
      var node = layer[id];
      var sum = Math.log(output[id] / (1 - output[id])); //logit
      var weightsTotal = 0;
      var weightedSum;

      sum -= node.bias;

      Object.keys(node.weights).reverse().forEach(function(iid) {
        weightsTotal += node.weights[iid];
      });

      weightedSum = sum / weightsTotal;
      input[layerIndex] = 1 / (1 + Math.exp(-weightedSum)); //sigmoid
      layerIndex--;
    });
    output = input;
    i--;
  }

  layerIndex = 0;
  Object.keys(net.layers[0]).forEach(function(id) {
    input[id] = input[layerIndex];
    delete input[layerIndex];
    layerIndex++;
  });

  return input;
};
