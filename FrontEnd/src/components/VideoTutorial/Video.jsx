import React from "react";

const Video = (props) => {
  const url = `https://www.youtube.com/embed/${props.id}`
  return (
    <iframe
      width="100%"
      height="100%"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
