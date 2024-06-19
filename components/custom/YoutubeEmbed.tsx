export const YoutubeEmbed = () => (
  <div className="min-w-[270px] min-h-[600px] md:mx-20">
    <iframe
      id="MIN H HAS TO BE FORCED IN IFRAME"
      className="rounded-3xl w-full min-h-[600px] border-8 border-t-primary border-l-primary border-r-orange-400 border-b-orange-400 border-opacity-80"
      src="https://www.youtube.com/embed/DO43nDUCM8k"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
