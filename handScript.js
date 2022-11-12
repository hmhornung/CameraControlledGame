const videoElement1 = document.getElementsByClassName('input_video')[0];
const canvasElement1 = document.getElementsByClassName('output_canvas')[0];
const canvasCtx1 = canvasElement1.getContext('2d');

var handData;


function onResults(results) {
  canvasCtx1.save();
  canvasCtx1.clearRect(0, 0, canvasElement1.width, canvasElement1.height);
  canvasCtx1.drawImage(
      results.image, 0, 0, canvasElement1.width, canvasElement1.height);
  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(canvasCtx1, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      drawLandmarks(canvasCtx1, landmarks, {color: '#FF0000', lineWidth: 2});
    }
  }
  handData = results.multiHandLandmarks;

  canvasCtx1.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera1 = new Camera(videoElement1, {
  onFrame: async () => {
    await hands.send({image: videoElement1});
  },
  width: 1280,
  height: 720
});
camera1.start();
