import { useState } from "react";

export default function App() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    city: "",
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className={darkMode ? "dark" : ""}>

      <div class="
  min-h-screen
  bg-gradient-to-br
  from-[#48d2ee] to-[#2575fc]
  dark:from-[#0a9fdf] dark:to-[#224997]
  transition-all duration-500
">


        <h1 className="md:text-5xl  text-3xl font-bold text-center md:pt-16 pt-10 text-white font-serif">
          Personal Profile Card
        </h1>

        <div className="max-w-4xl mx-auto px-4 md:py-20 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

            <div className="bg-[#ffffffc4] backdrop-blur-xl dark:bg-[#00000093] rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Enter Your Details
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border focus:outline-none  focus:ring-2 focus:ring-[#00b5d9] dark:focus:ring-[#0091ff]  dark:bg-gray-700 dark:text-white"
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={profile.age}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00b5d9] dark:focus:ring-[#0091ff]  dark:bg-gray-700 dark:text-white"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={profile.city}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#00b5d9] dark:focus:ring-[#0091ff]  dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-6 w-full py-3 rounded-lg bg-gradient-to-br from-[#2575fc] to-[#48d2ee] dark:from-[#0a9fdf] dark:to-[#224997] transition-all duration-500 text-white font-semibold hover:bg-gradient-to-br hover:from-[#004cd0] hover:to-[#00b5d9] hover:dark:from-[#007fb5] hover:dark:to-[#043495]">
                Toggle {darkMode ? "Light" : "Dark"} Mode
              </button>
            </div>


            <div className="bg-[#ffffffc4] backdrop-blur-xl dark:bg-[#00000093] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Live Profile Preview
              </h2>

              <div className="w-full max-w-sm bg-gradient-to-r from-[#2575fc] to-[#48d2ee]  dark:from-[#0a9fdf] dark:to-[#224997] hover:bg-gradient-to-br  hover:from-[#004cd0] hover:to-[#00b5d9]  hover:dark:from-[#007fb5] hover:dark:to-[#043495]  rounded-xl p-1">
                <div className="bg-[#ffffffe3] backdrop-blur-xl dark:bg-[#000000cb] rounded-xl p-6 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br  from-[#2575fc] to-[#48d2ee]  dark:from-[#0a9fdf] dark:to-[#224997] hover:bg-gradient-to-br  hover:from-[#004cd0] hover:to-[#00b5d9]  hover:dark:from-[#007fb5] hover:dark:to-[#043495] flex items-center justify-center text-white text-2xl font-bold">
                    {profile.name ? profile.name.charAt(0).toUpperCase() : "?"}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    {profile.name || "Your Name"}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    Age: {profile.age || "--"}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400">
                    City: {profile.city || "--"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
