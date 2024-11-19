const ContactSection = () => {
  return (
    <div id="contact" className="contact py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-6">
          <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 border rounded-lg" />
          <textarea placeholder="Your Message" required className="w-full px-4 py-3 border rounded-lg"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
