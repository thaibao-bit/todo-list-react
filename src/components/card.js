function Card(props){
    return <div className="card">
    <h4 className="welcome">{props.title ? props.title : "Thre is no title"}</h4>
    <p>{props.detail ? props.detail : "Sample detail Sample detail Sample detail Sample detail "}</p>
</div>
}

export default Card;