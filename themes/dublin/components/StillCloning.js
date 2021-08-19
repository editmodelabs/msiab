export default function StillCloning() {
  return (
    <div className="min-h-screen pt-12 pb-12 flex flex-col bg-white font-sans">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a href="https://wwww.editmode.com" className="inline-flex">
            <span className="sr-only">Editmode</span>
            <img
              className="h-16 w-auto"
              src="https://vercel.com/api/www/avatar/e7a8c308d71f99aa6ff0937e68b47938bf8bbf53?s=160"
              alt=""
            />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              HELLO, OWNER OF A NEW, BEAUTIFUL WEBSITE!
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not ready yet.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              We are still cloning your starter content - your page should be
              ready after refreshing it in a few minutes. This will happen just
              once in the lifecycle of your website.
            </p>
            {/* <div className="mt-6">
                <a
                  href="#"
                  className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
