// Represents a person with a first and last name.
type PersonProps = {
  name: {
    first: string; // First name of the person.
    last: string;  // Last name of the person.
  };
};

// Component that displays a person's name.
export const Person = (props: PersonProps) => {
  return (
    <div>
      <p>
        My name is {props.name.first} {props.name.last}
      </p>
    </div>
  );
};
