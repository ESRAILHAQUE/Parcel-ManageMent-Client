import { useContext } from "react";
import { Authcontext } from "../../../../Providers/AuthProviders";
import { MdContentCopy } from "react-icons/md";

function UserProfile() {
    const { user } = useContext(Authcontext);
    console.log(user)
      const handleCopy = (text) => {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            alert("Copied to clipboard");
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
          });
      };
  return (
    <div className="mx-9">
      <div>User Info</div>
      <div className="border">
        <p className="border p-3">Basic Info</p>
      </div>
      <div className="flex gap-8  p-3 border flex-col md:flex-row lg:flex-row">
        <div className="avatar online">
          <div className="w-28 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <p className="mr-3">{user?.displayName }</p>
            <button onClick={() => handleCopy(user?.displayName)}>
              <MdContentCopy />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <p className="mr-3">{user?.email}</p>
            <button onClick={() => handleCopy(user?.email)}>
              <MdContentCopy />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <p className="mr-3">ID: 22</p>
            <button onClick={() => handleCopy("22")}>
              <MdContentCopy />
            </button>
          </div>
          <input className="" type="file" name="" id="" />
        </div>
      </div>

      <div>
        <div className="border">
          <p className="border p-3">Contact Info</p>
        </div>
        <div className="flex gap-8  p-3 border flex-col md:flex-row lg:flex-row">
          <p>Contact Info</p>
        </div>
      </div>
    </div>
  );
}
export default UserProfile