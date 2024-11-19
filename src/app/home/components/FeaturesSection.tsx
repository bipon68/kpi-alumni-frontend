const FeaturesSection = () => {
  return (
    <div id="features" className="features py-16 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-3">High Quality Face Recognition</h4>
            <p>State-of-the-art face detection using the latest AI technology.</p>
          </div>
          <div className="feature bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-3">Fast and Accurate Match </h4>
            <p>Get results in seconds and experience fast, reliable performance.</p>
          </div>
          <div className="feature bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-3">Privacy and Security</h4>
            <p>Your data is secure with our robust privacy protocols.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
