<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>import array from "./arrary.js"

class Statistic {

  init (size) {
    this.table = array.create(size, size);
  }

  print (candidates) {
    console.log(this.table.map(function (r) { return r.map(i=>parseInt(Math.sqrt(i/10000))).join(',') }))
    var max = 0;
    var p;
    for (var i=0; i<candidates.length; i++) {
      var c = candidates[i];
      var s = this.table[c[0]][c[1]];
      if (s > max) {
        max = s;
        p = [c[0], c[1]];
      }
    }
    console.log('历史表推荐走法:', p);
  }
}

export default new Statistic()
