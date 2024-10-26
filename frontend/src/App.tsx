import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Rocket } from "lucide-react";
import axios from "axios";
import toast, {Toaster } from "react-hot-toast"
function App() {
  <Toaster/>

  const logos = [
    "https://imgs.search.brave.com/ioQuV23ytz_9ts_6r1XaMpCGTTbpPC_OxYYYR4sLhJM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9k/ZWxoaS1wdWJsaWMt/c2Nob29sLW1hbmRh/d2EtbG9nby5wbmc",
    "https://imgs.search.brave.com/0dRj_9Eu22f75a9-h3B6thUvQHbFcxyRdxlp85G3jw8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1Mvc3QtbWFy/eS1zLWhpZ2gtc2No/b29sLWxvZ28tQjdG/RkI4OEZFRi1zZWVr/bG9nby5jb20ucG5n",
    "https://imgs.search.brave.com/KXdw65AeW6pFOkP336Rw8haEzWGeWGBDuxgjlEUirJA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU1/MzY4ZWM0ZTRiMGU1/Y2IwYWI4ZjNjMC8x/NTIzODkxODg3NzIw/LUlQMFdJQzhDWkI3/RjIySFBKSDlWL1NN/Uytsb2dvK25ldysx/LnBuZw",
  ];
  const formSchema = z.object({
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    schoolName: z.string().min(2, "School name must be at least 2 characters"),
    city: z.string().min(2, "City must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      schoolName: "",
      city: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const res = await axios.post("https://ed-1-tkuz.onrender.com/form", {
        values,
      });
      if (res) {
         toast.success("User registered successfully")
      }
    } catch (err) {
      console.log(err)
      toast.error("error occured")
    }
  };
  return (
    <div className="h-full overflow-auto">
      <div className="flex flex-col h-full bg-blue-950">
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
              Talk to an expert
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
            <div className="w-full flex flex-col items-center mb-2 h-auto">
              <h1 className="mb-4 border bg-gradient-to-t from-[#a69536] to-[#483c19]  w-[300px] rounded-full text-center p-2 shadow-lg">
                School {"<>"} Teachers {"<>"} Parents
              </h1>
              <h1 className="text-3xl md:text-6xl mb-4 bg-gradient-to-b from-[#a39858] h-[130px] to-[#FFECB3] bg-clip-text text-transparent text-center shadow-md">
                Powering K12 with new- <br /> age SAAS.
              </h1>
            </div>
            <div className="flex flex-row justify-center ">
              <button className="bg-white text-black px-6 py-3 w-[200px] h-[50px] rounded-full hover:bg-gray-500 transition duration-300  mb-5 mr-4">
                Download app
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-full  hover:bg-purple-800 transition duration-300 ease-in-out mb-5">
                Talk to an expert
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-USKUNpg9_A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full max-w-[560px] rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          <div className="bg-blue-950 py-16 px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <p className="mb-4">
                Trusted by Teachers at over 1,000 of the India's leading Schools
              </p>
              <div className="flex justify-center space-x-8">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="bg-white w-20 h-20   hover:transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-blue-950 py-13 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Features that <br></br> work for your <br></br> future.
              </h2>
              <div className="grid md:grid-cols-2 gap-8 ">
                <div className="bg-blue-800 text-white p-6 rounded-lg shadow-[0_0_5px_5px_rgba(255,255,255,0.5)] transition-transform duration-300 ease-in-out hover:scale-110">
                  <h3 className="text-xl font-semibold mb-2  ">
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
                <div className="bg-blue-800 text-white p-6 rounded-lg shadow-[0_0_5px_5px_rgba(255,255,255,0.5)] transition-transform duration-300 ease-in-out hover:scale-110">
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
          </div>

          <div className="bg-blue-950 py-16 px-4 w-full">
            <div className="mx-auto bg-blue-800 w-[800px]  flex flex-col items-center  rounded-lg p-12 shadow-[0_0_5px_5px_rgba(255,255,255,0.5)]">
              <h2 className="text-3xl font-bold text-white mb-6">
                Get Ready to board the <br></br> Rocket!
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 w-[400px] "
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      placeholder="First Name"
                      {...register("firstName")}
                      className="w-full bg-blue-600 border border-blue-500 placeholder-blue-300 text-white p-2 rounded-lg"
                    />
                    {errors.firstName && (
                      <span className="text-red-300">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      placeholder="Last Name"
                      {...register("lastName")}
                      className="w-full bg-blue-600 border border-blue-500 placeholder-blue-300 text-white p-2 rounded-lg"
                    />
                    {errors.lastName && (
                      <span className="text-red-300">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    placeholder="School Name"
                    {...register("schoolName")}
                    className="w-full bg-blue-600 border border-blue-500 placeholder-blue-300 text-white p-2 rounded-lg"
                  />
                  {errors.schoolName && (
                    <span className="text-red-300">
                      {errors.schoolName.message}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    placeholder="City"
                    {...register("city")}
                    className="w-full bg-blue-600 border border-blue-500 placeholder-blue-300 text-white p-2 rounded-lg"
                  />
                  {errors.city && (
                    <span className="text-red-300">{errors.city.message}</span>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    {...register("email")}
                    className="w-full bg-blue-600 border border-blue-500 placeholder-blue-300 text-white p-2 rounded-lg"
                  />
                  {errors.email && (
                    <span className="text-red-300">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Phone Number"
                    type="tel"
                    {...register("phoneNumber")}
                    className="w-full bg-blue-600 border border-blue-500 placeholder-blue-300 text-white p-2 rounded-lg"
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-300">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    {...register("message")}
                    className="w-full bg-blue-600 border border-blue-500 placeholder-blue-300 text-white p-2 rounded-lg"
                  />
                  {errors.message && (
                    <span className="text-red-300">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded flex items-center justify-center"
                >
                  Send it to the moon <Rocket className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="bg-blue-900 text-white py-8 px-4 ">
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
