import "./styles.css";

export default function Chat() {
  return (
    <>
      <div className="chat">
        <form>
          <label htmlFor="chat">
            Chat with us!
            <span className="chat-close">&times;</span>
          </label>
          <input type="text" name="chat" />
        </form>
      </div>
    </>
  );
}
