const Cancel = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      {/* main cancel card container */}
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-2xl">
        {/* animated cancel/error icon */}
        <div className="w-20 h-20 bg-rose-500/10 border border-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-rose-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        {/* heading and description */}
        <h1 className="text-3xl font-extrabold text-white mb-2">
          Payment Canceled
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Your transaction was canceled or couldn't be processed. Don't worry,
          no charges were made.
        </p>

        {/* payment details box */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-6 text-left">
          <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
            <span>Status</span>
            <span className="text-rose-400 font-medium bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
              Canceled
            </span>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Reason</span>
            <span className="text-slate-200 font-medium">
              User Aborted / Failed
            </span>
          </div>
        </div>

        {/* action buttons */}
        <div className="space-y-3">
          <a
            href="/"
            className="block w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-xl border border-slate-700 transition-all duration-200"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
