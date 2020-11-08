<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>export default {
  create: function (w, h) {
    var r = []
    for(var i=0;i<w;i++) {
      var row = new Array()
      for(var j=0;j<h;j++) {
        row.push(0)
      }
      r.push(row)
    }
    return r
  }
}
