// Consts
const cameraView = document.getElementById("camera__view"),
	cameraTrigger = document.getElementById("camera__trigger");

// Access the device camera and stream to cameraView
const cameraStart = async () => {
	try {
		let stream = await navigator.mediaDevices.getUserMedia({
			video: true,
			audio: false,
		});
		cameraView.srcObject = stream;
	} catch (err) {
		alert(err);
	}
};

// Stop camera
const cameraStop = (source) => {
	try {
		const tracks = source.getTracks();
		tracks.forEach((track) => {
			track.stop();
		});
	} catch (err) {
		alert(err);
	}
};

// on/off camera when cameraTrigger is clicked
cameraTrigger.onclick = () => {
	if (cameraView.srcObject.active) {
		confirm("Turn webcam off?")
			? cameraStop(cameraView.srcObject)
			: alert("Webcam ON");
	} else {
		confirm("Turn webcam on?") ? cameraStart() : alert("Webcam OFF");
	}
};

// Start the video stream when the window loads
window.addEventListener("load", cameraStart);
