import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Messages() {
  return (
    <>
      <Navbar />

      <div className="page">

        <div className="messages-container glass">

          <div className="chat-list">

            <h3>Chats</h3>

            <div className="chat-user active-chat">
              Arun Kumar
            </div>

            <div className="chat-user">
              Priya Sharma
            </div>

            <div className="chat-user">
              Rahul Dev
            </div>

          </div>

          <div className="chat-window">

            <div className="message received">
              Hi 👋
            </div>

            <div className="message sent">
              Hello bro 🚀
            </div>

            <div className="message received">
              React project completed ah?
            </div>

            <div className="message sent">
              Yes finished 🔥
            </div>

            <div className="chat-input">

              <input
                type="text"
                placeholder="Type message..."
              />

              <button>
                Send
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}