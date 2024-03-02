type GreetProps ={
    name : string,
    messageCount : number,
    isLogged : boolean
}

export const Greet = (props : GreetProps) =>{
    return (
        <div>
            <p>
                {
                    props.isLogged ? `hello ${props.name} you have ${props.messageCount} messages` :
                     `welcome guest `
                }
            </p>
        </div>
    );
}