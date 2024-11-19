import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <div id="pricing" className="pricing py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Subscription Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="plan bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-4">Free</h4>
            <p className="mb-4">3 matches per day - $0/month</p>
            <Link to={`/checkout/free`} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
              Start Free Trial
            </Link>
          </div>
          <div className="plan bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-4">Pro</h4>
            <p className="mb-4">Unlimited matches - $9.99/month</p>
            <Link to={`/checkout/pro`} className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
