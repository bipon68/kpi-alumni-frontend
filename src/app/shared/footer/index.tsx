const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="social-links mb-4">
          <a href="#" className="text-blue-400 mx-2 hover:underline">
            Facebook
          </a>
          <a href="#" className="text-blue-400 mx-2 hover:underline">
            Twitter
          </a>
          <a href="#" className="text-blue-400 mx-2 hover:underline">
            LinkedIn
          </a>
        </div>
        <p>&copy; 2024 Face Match AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
