"use client";

export default function Error({ reset }) {
  return <div className="grid min-h-screen place-items-center px-4 pt-24 text-center"><div><p className="eyebrow mb-3">Error</p><h1 className="display text-6xl font-black text-espresso">Something needs another pass.</h1><p className="mx-auto mt-4 max-w-xl text-charcoal/70">The app hit an unexpected issue. Try refreshing this view.</p><button onClick={reset} className="btn-primary mt-7">Try Again</button></div></div>;
}
