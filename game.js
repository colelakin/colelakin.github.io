let permissionGranted = false;
alert("start");

function setup() {
  alert("setup1");
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
// ios 13 device
    DeviceOrientationEvent.requestPermission
      .catch(() => {
      let button = createButton("click to allow access to sensors");
      button.style("textSize", "24px");
      button.center();
      button.mousePressed( requestAccess );
      throw error;
    })
    .then(() => {
      permissionGranted = true;
    })
    alert("setup if");
}  else {
//non ios 13 device

    textSize("48px");
    text("non ios 13 device", 100, 100);
    permissionGranted = true;
    alert("setup else if");
    }
    return;
}

function requestAccess(){
  alert("request access");
  DeviceOrientationEvent.requestPermission
    .then(response => {
      if (response == 'granted'){
        permissionGranted = true;
      } else {
        permissionGranted = false;
      }
  })
  .catch(console.error);

  this.remove();
  return;
}

function Rotation(){
  alert("rotation");
  if (!permissionGranted) return;
  text(rotationX, 0, 100);
  alert("rotation2");
}

function accuracy(rotationX){
  if (rotationX > 10){
    aim = "too high";
  }
  else if (rotationX < -10) {
    aim = "too low";
  }
  else {
    aim = "Hit!";
  }
}
