import React, { useState, useEffect, useContext } from 'react';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { adminContext } from './adminContext';
const Message = () => {

  const{showSuccess, showError} = useContext(adminContext)

  const [isReplying, setIsReplying] = useState(false);
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleReplyClick = (index) => {
    const newMessages = [...messages];
    newMessages[index].isReplying = !newMessages[index].isReplying;
    setMessages(newMessages);
  };

  const handleSendReply = async (index, messageId) => {
    if (replyText.trim() === "") return;

    const newReply = {
      id: replies.length + 1,
      text: replyText,
      timestamp: new Date().toLocaleString(),
    };

    const newMessages = [...messages];
    newMessages[index].replies = [...(newMessages[index].replies || []), newReply];
    newMessages[index].isReplying = false;
    setMessages(newMessages);
    setReplyText("");

    // Send the reply to the backend
    try {
      await fetch('http://localhost:5000/reply-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageId: messageId,
          replyText: replyText,
          adminEmail: 'muhammadumair23568@gmail.com',  // You can use the admin's email
        }),
      });
      showSuccess('Reply sent successfully');
    } catch (error) {
      showError('Error sending reply:', error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Error fetching messages:', error));
  }, []);



const deleteMessage = async (id) => {
  try {
      console.log("Deleting message with ID:", id); // Debugging ke liye

      const response = await fetch(`http://localhost:5000/messages/${id}`, {
          method: "DELETE"

      });

      const data = await response.json();
      console.log("Response from server:", data); // Debugging ke liye

      if (response.ok) {
          setMessages(messages.filter((message) => message._id !== id));
          showSuccess("Message Deleted Successfully");
      } else {
          showError("Message Not Deleted: " + data.message);
      }
  } catch (error) {
      showError("Message Not Deleted: " + error.message);
      console.error("Error:", error);
  }
};

  return (
    <div style={{backgroundColor:"var(--background-color)", height:"100vh"}}>
      <Sidebar/>
      <div className='' style={{paddingTop:"7rem"}}>
      {messages.map((message, index) => (
        <div key={index} className='d-flex justify-content-center'>
        <div className="message-container" >
          <div className="message-header d-flex justify-content-between">
            <div className='d-flex'>
            <h3>{message.userName}</h3>
            <p className='' style={{marginTop:".3rem"}}>{message.email}</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteMessage(message._id)} style={{cursor:'pointer'}}/>
            </div>         
          </div>
          <div className="message-body">
            <p>{message.message}</p>
          </div>
          
          <div className='d-flex justify-content-between'>
          <button className="reply-button" onClick={() => handleReplyClick(index)}>
            {message.isReplying ? "Cancel" : "Reply"}
          </button>
          <span className="timestamp my-0 p-0" >{moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>

          </div>
          {message.isReplying && (
            <div className="reply-form-container">
              <textarea
                className="reply-textarea"
                placeholder="Type your reply here..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              ></textarea>
              <button className="send-reply-button" onClick={() => handleSendReply(index, message._id)}>
                Send Reply
              </button>
            </div>
          )}
          {message.replies && message.replies.length > 0 && (
            <div className="replies-container">
              {message.replies.map((reply) => (
                <div key={reply.id} className="reply">
                  <p className="reply-text">{reply.text}</p>
                  <span className="reply-timestamp">{reply.timestamp}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Message;
