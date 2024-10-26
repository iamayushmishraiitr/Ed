function App() {
  return (
    <div className="h-full overflow-auto">
      <div className="flex flex-col h-full bg-blue-900">
        <div className="flex justify-between items-center p-2 bg-blue-900 pr-[140px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/socialmedia-5a9a9.appspot.com/o/Full%20logo%20all%20white.png?alt=media&token=39bd55c8-30c2-4f44-9d96-fdea41f45654"
            className="h-10"
          />

          <div className="flex items-center space-x-10">
            <a href="#" className="text-white">
              Products
            </a>
            <a href="#" className="text-white">
              About us
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
            <button className="bg-white text-blue-800 px-4 py-2  hover:bg-blue-100 w-[180px] rounded-full">
              Download app
            </button>
            <button className="border border-white text-white px-4 py-2  hover:bg-blue-600 w-[180px] rounded-full  ">
              Talk to an exper
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <div
            className="relative text-white py-5 px-4 h-[650px] mw-full mx-auto"
            style={{
              backgroundImage:
                "url('https://imgs.search.brave.com/eRY7CdupoIHzn1Ssofit9fdu05EplyepEFb0r40r08I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS84NC83/My9IU3lqMlYuanBn')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full flex flex-col items-center">
              <h1 className="mb-4 border border-yellow-100 w-[300px] rounded-full text-center p-2 shadow-lg">
                School . Teachers . Parents
              </h1>
              <h1 className="text-3xl md:text-6xl mb-4 text-yellow-200 text-center shadow-md">
                Powering K12 with new- <br /> age SAAS.
              </h1>
            </div>
            <div className="flex flex-row justify-center ">
              <button className="bg-white text-black px-6 py-3 w-[200px] h-[50px] rounded-full hover:bg-gray-500 transition duration-300  mb-5 mr-4">
                Download app
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-purple-800 transition duration-300 ease-in-out mb-5">
                Talk to an expert
              </button>
            </div>
          </div>

          <section className="bg-blue-600 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <p className="mb-4">
                Trusted by Teachers at over 1,000 of the India's leading Schools
              </p>
              <div className="flex justify-center space-x-8">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white w-16 h-16 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </section>
          <section className="bg-blue-600 py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Features that work for your future.
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    Reports Dashboard
                  </h3>
                  <p className="text-sm">
                    Our Reports Dashboard offers a comprehensive overview for
                    you to monitor and analyze various aspects of your school's
                    performance.
                  </p>
                  <a
                    href="#"
                    className="text-white underline mt-4 inline-block"
                  >
                    View dashboard
                  </a>
                </div>
                <div className="bg-blue-700 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">AI Attendance</h3>
                  <p className="text-sm">
                    Our AI-powered attendance system streamlines the process,
                    saving time and ensuring accuracy in tracking student
                    presence.
                  </p>
                  <a
                    href="#"
                    className="text-white underline mt-4 inline-block"
                  >
                    View integration
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-600 py-16 px-4">
            <div className="max-w-md mx-auto bg-blue-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Get Ready to board the Rocket!
              </h2>
              <form className="space-y-4">
                <input
                  placeholder="Last Name"
                  className="bg-blue-600 text-white placeholder-blue-300 w-full p-2 rounded"
                />
                <input
                  placeholder="First Name"
                  className="bg-blue-600 text-white placeholder-blue-300 w-full p-2 rounded"
                />
                <input
                  placeholder="School Name"
                  className="bg-blue-600 text-white placeholder-blue-300 w-full p-2 rounded"
                />
                <input
                  placeholder="City"
                  className="bg-blue-600 text-white placeholder-blue-300 w-full p-2 rounded"
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="bg-blue-600 text-white placeholder-blue-300 w-full p-2 rounded"
                />
                <input
                  placeholder="Phone Number"
                  type="tel"
                  className="bg-blue-600 text-white placeholder-blue-300 w-full p-2 rounded"
                />
                <textarea
                  placeholder="Message"
                  className="bg-blue-600 text-white placeholder-blue-300 w-full p-2 rounded"
                ></textarea>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
                  Send to the team
                </button>
              </form>
            </div>
          </section>
        </div>

        <footer className="bg-blue-700 text-white py-8 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p>support: myed.team@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p>MyEd HQ, 123 Tech Street, Bangalore, India</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-300">
                  Instagram
                </a>
                <a href="#" className="hover:text-blue-300">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 MyEd. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
