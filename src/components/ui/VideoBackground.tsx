import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  overlayOpacity?: number;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoUrl, 
  overlayOpacity = 50,
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div 
        className={`absolute inset-0 bg-secondary-900`} 
        style={{ opacity: overlayOpacity / 100 }}
      ></div>
    </div>
  );
};

export default VideoBackground;