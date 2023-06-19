const TutorialVideo = () => {
    const videoUrl = "https://www.youtube.com/embed/mjlsSYLLOSE";
  
    return (
      <iframe
        title="Tutorial Video"
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  };
  
  export default TutorialVideo;
  