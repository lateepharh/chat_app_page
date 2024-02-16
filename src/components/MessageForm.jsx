import React from "react";
import { sendMessage, isTyping } from "react-chat-engine";
// import { SendOutlined, PictureAsPdfOutlined } from "@mui/icons-material";

function MessageForm(props) {
  const { chatId, creds } = props;
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDeafault();
    const text = value.trim();
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
      setValue("");
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };
  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.value, text: "" });
  };
  return (
    <form className="message-form " onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Send a message"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          {/* <PictureAsPdfOutlined className="picture-icon" /> */}
          <i className="picture-icon">pics</i>
        </span>
      </label>
      <input
        type="file"
        name="file"
        id="upload-button"
        multiple={false}
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button type="submit" className="send-button">
        {/* <SendOutlined className="send-icon" /> */}
        <i className="send-icon">Send</i>
      </button>
    </form>
  );
}

export default MessageForm;
