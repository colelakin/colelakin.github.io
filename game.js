let permissionGranted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
// ios 13 device
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
      let button = createButton("click to allow access to sensors");
      button.style("font-size", "24px");
      button.center();
      button.mousePressed( requestAccess );
      throw error;
    })
    .then(() => {
      permissionGranted = true;
    })
}  else {
//non ios 13 device
    textSize(48);
    text("non ios 13 device", 100, 100);
    permissionGranted = true;
    }
}

function requestAccess(){
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == 'granted'){
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
  })
  .catch(console.error);

  this.remove();
}

function draw(){
  if (!permissionGranted) return;
  text(rotationX, 100, 100);
}
