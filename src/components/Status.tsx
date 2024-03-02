// Represents different status types: loading, success, or error.
type StatusProps = {
    status: 'loading' | 'success' | 'error'; // Status of the component.
  };
  
  // Component that displays a status message based on the provided status.
  export const Status = (props: StatusProps) => {
    let message;
    if (props.status === 'loading') {
      message = 'Loading...'; // Displayed when the status is 'loading'.
    } else if (props.status === 'success') {
      message = 'Data fetched successfully'; // Displayed when the status is 'success'.
    } else if (props.status === 'error') {
      message = 'Error fetching data'; // Displayed when the status is 'error'.
    }
  
    return <div>Status: {message}</div>;
  };
  
  
  
  
  