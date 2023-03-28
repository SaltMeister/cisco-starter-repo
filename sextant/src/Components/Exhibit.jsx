import '../Exhibit.css';

function Exhibit(props) {
  return (
    <div className="Exhibit-component">
      <h1>{props.header}</h1>
      <div>
        {props.component}
      </div>
    </div>
  );
}

export default Exhibit;