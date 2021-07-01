import { useContext } from "react";
import MessageContext from "../contexts/MessageContext";
import styled from "styled-components";
import "./Message.css";

function Message() {

  const Alert = styled.div`
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    color: #721c24;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    padding: 10px;
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 9999;
  `;

  const { message, setMessage } = useContext(MessageContext);

  return (
    message && (
      <Alert>
        <span className="closebtn" onClick={() => setMessage("")}>
          &times;
        </span>
        {message}
      </Alert>
    )
  );
}

export default Message;
