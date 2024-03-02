type NamesListProps = {
    names: {
      first: string,
      last: string,
    }[];
  };
  
  export const NameList = (props: NamesListProps) => { // Update the component name
    return (
      <div>
        {props.names.map((name) => {
          return (
            <div key={name.first}>
              {name.first} {name.last}
            </div>
          );
        })}
      </div>
    );
  };