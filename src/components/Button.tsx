
function Button(props: { name: string; link: string }) {
  return <a href={props.link}> {props.name} </a>;
}

export default Button;
