const products = [
  {
    id: 1,
    name: 'React Developer T-Shirt',
    description: 'Premium cotton black t-shirt for React developers.',
    price: 25,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Node.js Developer Hoodie',
    description: 'Warm and comfy hoodie featuring Node.js branding.',
    price: 45,
    image:
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'Fullstack JavaScript Mug',
    description: 'Ceramic coffee mug for your late night coding sessions.',
    price: 15,
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'RGB Backlit mechanical keyboard with tactile switches.',
    price: 85,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60',
  },
];

import axios from 'axios';

const ProductCard = () => {
  const handleCheckout = async (product) => {
    try {
      // stripe payment API integration
      const res = await axios.post(
        'http://localhost:5000/create-checkout-session',
        {
          product,
        },
      );
      window.location.href = res.data.url;
    } catch (error) {
      console.log('Checking out product:', product);
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* header section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
          Stripe Payment Store
        </h1>
        <p className="mt-3 text-slate-400 text-lg max-w-2xl mx-auto">
          Choose a product and experience seamless checkout integration powered
          by Stripe.
        </p>
      </div>

      {/* product grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col justify-between bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
            {/* image container */}
            <div className="relative aspect-square overflow-hidden bg-slate-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 border border-slate-800">
                ${product.price}
              </div>
            </div>

            {/* content container */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* action button */}
              <div className="mt-6">
                <button
                  onClick={() => handleCheckout(product)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium py-2.5 px-4 rounded-xl shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Pay with Stripe</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v4h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
