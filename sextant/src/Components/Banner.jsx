function Title(props) {
  return <h1>{props.name}</h1>
}
function Banner(props) {
  return(
    <div>
      <Title name={props.title}/>
    </div>
  );
}

export default Banner;