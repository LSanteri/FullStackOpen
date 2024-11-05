const Message = ({ message, isError }) => {
  if (!message) return null;

  return (
    <div style={{
      color: isError ? 'red' : 'green',
      backgroundColor: 'lightgrey',
      border: `2px solid ${isError ? 'red' : 'green'}`,
      padding: '10px',
      margin: '10px 0',
    }}>
      {message}
    </div>
  );
};
  
  export default Message;
  