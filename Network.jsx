import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";

export default function Network() {

  const users = [
    {
      id:1,
      name:"Arun Kumar",
      role:"Frontend Developer",
      company:"Google",
      avatar:"https://i.pravatar.cc/150?img=1"
    },
    {
      id:2,
      name:"Priya Sharma",
      role:"UI UX Designer",
      company:"Adobe",
      avatar:"https://i.pravatar.cc/150?img=5"
    },
    {
      id:3,
      name:"Rahul Dev",
      role:"Full Stack Developer",
      company:"Microsoft",
      avatar:"https://i.pravatar.cc/150?img=8"
    },
    {
      id:4,
      name:"Karthik Raj",
      role:"React Developer",
      company:"Amazon",
      avatar:"https://i.pravatar.cc/150?img=10"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="page">

        <div className="network-header">
          <h1 className="gradient-text">
            Grow Your Network
          </h1>

          <input
            type="text"
            placeholder="Search people..."
          />
        </div>

        <div className="network-grid">

          {users.map((user)=>(
            <UserCard
              key={user.id}
              user={user}
            />
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}