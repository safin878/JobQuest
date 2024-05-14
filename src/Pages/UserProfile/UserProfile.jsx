import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.pathname || "/";
  const navigate = useNavigate();

  //Update Profile
  const handelReg = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;

    // console.log([name, photo, email]);
    try {
      if (user) {
        updateUserProfile(name, photo);
        setUser({ ...user, photoURL: photo, displayName: name });
        Swal.fire({
          title: "Profile Update Successful !",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(from, { replace: true });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div>
        <section className=" min-h-screen grid items-center justify-center  ">
          <h2 className="font-bold text-5xl text-[#002D74] text-center">
            User Profile
          </h2>
          <div className="bg-gray-100  rounded-2xl shadow-lg max-w-3xl p-4 flex flex-col items-center">
            <div className="md:block container  w-1/2  flex items-center">
              <img
                className="rounded-2xl  container mx-auto"
                src={user?.photoURL}
              />
            </div>

            <div className="md:w-full px-8 md:px-16 p-4 -my-6">
              <form
                onSubmit={handelReg}
                action=""
                className="flex flex-col gap-4"
              >
                <input
                  className="p-2 mt-8 rounded-xl border"
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Username"
                />
                <input
                  className=" p-2  rounded-xl border "
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  placeholder="Email"
                />

                <input
                  className="p-2  rounded-xl border col-span-2"
                  type="text"
                  name="photo"
                  defaultValue={user?.photoURL}
                  placeholder="PhotoURL"
                />

                <div>
                  <button className="bg-color-1 hover:bg-color-3 rounded-xl text-white py-2 hover:scale-105 duration-300  w-full ">
                    Update
                  </button>
                </div>
              </form>
            </div>
            {/* image */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
