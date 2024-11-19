const HeroSection = () => {
  return (
    <div id="home" className="hero bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Face Match AI - Find Faces Quickly and Easily</h2>
        <p className="text-lg mb-6">
          Upload an image and identify faces in seconds. Try now and see the power of AI at work.
        </p>
        <a href="#upload" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md mr-4">
          Try Now
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.facesearch.app"
          target="_blank"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md"
        >
          Download the App
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
