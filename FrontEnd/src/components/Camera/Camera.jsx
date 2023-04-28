// import './App.css';
import React, { useRef } from "react";
import RecordRTC from "recordrtc";

const Camera = () => {
  const videoRef = useRef(null);
  const recorderRef = useRef(null);
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      videoRef.current.srcObject = stream;
      recorderRef.current = new RecordRTC(stream, { type: "video" });
    });
  const startRecording = () => {
    recorderRef.current.startRecording();
  };

  const stopRecording = () => {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      const formData = new FormData();
      formData.append("video", blob);

      // fetch('/process_video', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then(response => response.blob())
      //   .then(blob => {
      //     const videoUrl = URL.createObjectURL(blob);
      //     videoRef.current.src = videoUrl;
      //   });
    });
  };

  return (
    <div>
      <video ref={videoRef} autoPlay />
      <button onClick={startRecording}/>
      <button onClick={stopRecording}>Stop Recording</button>
    </div>
  );
};
export default Camera;
