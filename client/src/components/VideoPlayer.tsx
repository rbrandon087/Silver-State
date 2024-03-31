import React from "react";
import ReactPlayer from "react-player";

export interface IVideoPlayerProps {
  name: string;
}

const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({ name }) => {
  return (
    <div className="-top-8 left-0 w-full h-full object-cover mt-8">
      <ReactPlayer
        url="https://vimeo.com/929226812?share=copy"
        playing
        loop
        muted
        controls={false}
        width="100%"
        height="100vh"
      />
    </div>
  );
};

export default VideoPlayer;
