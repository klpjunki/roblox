import React from 'react';

const FeaturesSection = () => (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 sm:py-32">
        <div className="text-center">
            <span className="text-gradient text-base font-medium uppercase leading-7">Why Delta?</span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-100 sm:text-4xl">Built for the future</h2>
            <p className="mt-2 max-w-3xl text-lg leading-tight tracking-tight text-slate-400">
                RobloxExe, we're always looking to improve our product and provide the best experience possible.
            </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-coals-3">

            <div className="feature-card flex flex-col items-start justify-center rounded-lg border border-white/5 bg-slate-200/5 p-14 backdrop-blur">
        <span className="my-2 h-12 w-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-indigo-400">
            <circle cx="12" cy="8" r="6"></circle>
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
          </svg>
        </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-slate-100">Premium experience</h3>
                <p className="mt-2 leading-tight tracking-tighter text-slate-400">
                    Our products is embedded with the best features, and we are constantly adding new features.
                </p>
            </div>

            <div className="feature-card flex flex-col items-start justify-center rounded-lg border border-white/5 bg-slate-200/5 p-14 backdrop-blur">
        <span className="my-2 h-12 w-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-indigo-400">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-slate-100">Fast updates</h3>
                <p className="mt-2 leading-tight tracking-tighter text-slate-400">
                    With our dedicated team, we are able to update our products as fast as possible.
                </p>
            </div>

            <div className="feature-card flex flex-col items-start justify-center rounded-lg border border-white/5 bg-slate-200/5 p-14 backdrop-blur">
        <span className="my-2 h-12 w-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-indigo-400">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" x2="12.01" y1="17" y2="17"></line>
          </svg>
        </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-slate-100">24/7 support</h3>
                <p className="mt-2 leading-tight tracking-tighter text-slate-400">
                    Our support team is always ready to help you with any questions you may have.
                </p>
            </div>

            <div className="feature-card flex flex-col items-start justify-center rounded-lg border border-white/5 bg-slate-200/5 p-14 backdrop-blur">
        <span className="my-2 h-12 w-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-indigo-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-slate-100">Secure</h3>
                <p className="mt-2 leading-tight tracking-tighter text-slate-400">
                    We guarantee that your data is safe and secure with our latest encryption technologies.
                </p>
            </div>

            <div className="feature-card flex flex-col items-start justify-center rounded-lg border border-white/5 bg-slate-200/5 p-14 backdrop-blur">
        <span className="my-2 h-12 w-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-indigo-400">
            <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"></path>
            <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
            <path d="M16 11h0"></path>
          </svg>
        </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-slate-100">Free</h3>
                <p className="mt-2 leading-tight tracking-tighter text-slate-400">
                    Our products are completely free to use, and we will never ask you to pay.
                </p>
            </div>

            <div className="feature-card flex flex-col items-start justify-center rounded-lg border border-white/5 bg-slate-200/5 p-14 backdrop-blur">
        <span className="my-2 h-12 w-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 stroke-indigo-400">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-slate-100">Industry-leading performance</h3>
                <p className="mt-2 leading-tight tracking-tighter text-slate-400">
                    Using the latest technologies, we provide the best performance possible.
                </p>
            </div>
        </div>
    </div>
);

export default FeaturesSection;