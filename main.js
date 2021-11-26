var num = 266219;
function persistence(num) {
  var result = num.toString().split('').reduce(function(total, v) {
    return total * v;
  }, 1);
  console.log(result);
}

persistence(266219);
    