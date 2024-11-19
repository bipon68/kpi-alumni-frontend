import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51PGClaSCaAec7Hm6QM3OBp4s3wzq67FyDwFFynTiVjNiIKlLZucfjBi43KjTcr3YcCVR9ugChTWvbKVoJaiLsAuQ00DFkfnXr2"
);

const CheckoutPage = () => {
  let params = useParams();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    if (!stripe) {
      alert("Stripe initialization failed.");
      setLoading(false);
      return;
    }

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-6 text-center">Stripe Payment</h2>
        <p className="text-gray-600 mb-4 text-center">Price: ${params.planId === "free" ? `0` : `9.99`}</p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`w-full py-3 rounded ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white font-semibold`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
