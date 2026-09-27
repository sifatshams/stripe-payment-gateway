import React from 'react'

const Success = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      {/* main success card container */}
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl">
        
        {/* animated checkmark icon */}
        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        {/* heading and description */}
        <h1 className="text-3xl font-extrabold text-white mb-2">
          Payment Successful!
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Thank you for your purchase. Your payment was processed successfully via Stripe.
        </p>

        {/* payment details box */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-6 text-left">
          <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
            <span>Status</span>
            <span className="text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Completed
            </span>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Payment Method</span>
            <span className="text-slate-200 font-medium">Stripe Gateway</span>
          </div>
        </div>

        {/* action buttons */}
        <div className="space-y-3">
          <a
            href="/"
            className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200"
          >
            Back to Home
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Success;