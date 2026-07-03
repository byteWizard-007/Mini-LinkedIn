import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

export default function Feed() {
  const posts = [
    {
      id: 1,
      name: "Arun Kumar",
      role: "Frontend Developer",
      avatar: "https://i.pravatar.cc/150?img=1",
      likes: 125,
      content:
        "Excited to share my latest React project 🚀",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },

    {
      id: 2,
      name: "Priya Sharma",
      role: "UI UX Designer",
      avatar: "https://i.pravatar.cc/150?img=5",
      likes: 210,
      content:
        "Working on a modern SaaS dashboard design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="page">

        <div className="feed-layout">

          <div className="feed-left glass">
            <h3>Trending</h3>

            <ul>
              <li>#ReactJS</li>
              <li>#Frontend</li>
              <li>#WebDevelopment</li>
              <li>#JavaScript</li>
              <li>#UIUX</li>
            </ul>
          </div>

          <div className="feed-center">

            <div className="create-post glass">

              <input
                type="text"
                placeholder="Share something..."
              />

              <button>
                Post
              </button>

            </div>

            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
              />
            ))}

          </div>

          <div className="feed-right glass">

            <h3>Suggested Users</h3>

            <div className="suggested-user">
              <h4>Karthik Raj</h4>
              <button>Connect</button>
            </div>

            <div className="suggested-user">
              <h4>Rahul Dev</h4>
              <button>Connect</button>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}