import { useContext } from "react";
import { useNavigate } from "react-router";
import { User, LogOut, ChevronRight } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Avatar + name */}
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="w-20 h-20 rounded-full bg-dark flex items-center justify-center">
          <User size={36} className="text-white" />
        </div>
        <div className="text-center">
          <p className="font-black text-xl text-dark">{auth?.user?.user_metadata?.name ?? "Your Name"}</p>
          <p className="text-sm text-muted">{auth?.user?.email}</p>
        </div>
      </div>

      {/* Salary section */}
      <div>
        <p className="text-xs tracking-widest uppercase font-bold text-muted mb-2 px-1">
          Salary
        </p>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <button className="w-full flex items-center justify-between px-4 py-4 border-b border-border">
            <span className="font-bold text-dark">Monthly salary</span>
            <div className="flex items-center gap-2">
              <span className="text-muted font-bold">€0</span>
              <ChevronRight size={16} className="text-subtle" />
            </div>
          </button>
          <button className="w-full flex items-center justify-between px-4 py-4">
            <span className="font-bold text-dark">Hourly rate</span>
            <div className="flex items-center gap-2">
              <span className="text-muted font-bold">€0</span>
              <ChevronRight size={16} className="text-subtle" />
            </div>
          </button>
        </div>
      </div>

      {/* Account section */}
      <div>
        <p className="text-xs tracking-widest uppercase font-bold text-muted mb-2 px-1">
          Account
        </p>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <button className="w-full flex items-center justify-between px-4 py-4 border-b border-border">
            <span className="font-bold text-dark">Change password</span>
            <ChevronRight size={16} className="text-subtle" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-4">
            <span className="font-bold text-dark">Edit name</span>
            <ChevronRight size={16} className="text-subtle" />
          </button>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={async () => {
          await auth?.signOut();
          navigate("/login");
        }}
        className="w-full flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-4 text-accent font-black"
      >
        <LogOut size={18} />
        Log out
      </button>
    </div>
  );
};

export default Profile;
