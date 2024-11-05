const Message = ({ message }) => {
    if (!message) return null;
  
    return (
      <div style={{
        color: 'green',
        backgroundColor: 'lightgrey',
        border: '2px solid green',
        padding: '10px',
        margin: '10px 0',
      }}>
        {message}
      </div>
    );
  };
  
  export default Message;
  