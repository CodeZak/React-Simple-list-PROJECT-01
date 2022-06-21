function Socialitem(props) {
    return (
        <li>
            <img src={props.p.img} alt= {`icon of ${props.p.media}`} />
            <input type="checkbox" id={props.p.id} />
            <label htmlFor={props.p.id}> {props.p.media} </label>
        </li>
    );
}

export default Socialitem;
