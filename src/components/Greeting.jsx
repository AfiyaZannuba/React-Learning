const Greeting = () => {
    const greetingMsg = "Namaskaram !"
    const currDate = new Date();
    return (
        <div>
            <h1>{greetingMsg}</h1>
            <p>Date: {currDate.getDate()}</p>
        </div>
    )
}

export default Greeting;