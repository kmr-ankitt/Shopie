function Button(props: { name: string; link: string }) {

  return <div className="hover:text-gray-300 duration-500 p-2"><a href={props.link} className="font-heavitas 	"> {props.name} </a></div>;
}

export default Button;
