import gifken from 'gifken';

var xhr = new XMLHttpRequest();
xhr.open("GET", './assets/tenor.gif', true);
xhr.responseType = "arraybuffer";
xhr.onload = function (e) {
    var arrayBuffer = e.target["response"];
    var gif = gifken.Gif.parse(arrayBuffer);

    var canvas = document.createElement("canvas");
    canvas.width = gif.width;
    canvas.height = gif.height;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, gif.width, gif.height);

    gif.split().forEach((splited) => {
      var img = new Image();

      img.src = gifken.GifPresenter.writeToDataUrl(splited.writeToArrayBuffer());
      ctx.drawImage(img, 0, 0);
      var img2 = new Image();
      img2.src = canvas.toDataURL("image/gif");
      document.body.appendChild(img2);
    });
  };
xhr.send();