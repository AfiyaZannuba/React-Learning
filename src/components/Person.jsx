const Person  = (props) => {
    return(
        <section>
            <h2>Name of the Person: {props.name}</h2>
            <p>Age of the Person: {props.age}</p>
        </section>
    )
}

export default Person;