function Hi(props) {
    
        if (props.name === "John") {
            return(<h1> Hello {props.name}!</h1>);
        }
        else {
            return(<h1> Hi another buddy</h1>)

        }

}
export default Hi;