
// Represents greeting information with name, message count, and login status.
type GreetProps = {
    name: string;      // Name of the person.
    messageCount?: number; // Optional Number of messages for the person.
    isLogged: boolean;   // Login status of the person.
  };
  
  // Component that displays a greeting based on login status and message count.
  export const Greet = (props: GreetProps) => {
    const { messageCount = 0} = props;
    return (
      <div>
        <p>
          {props.isLogged
            ? `Hello ${props.name}, you have ${messageCount} messages`
            : `Welcome, guest`}
        </p>
      </div>
    );
  };