export default function JobBox(props) {
  return (
    <div className="jobBox-container">
      <p className="jobBox-date">Posted On: {props.date}</p>
      <div className="jobBox-details">
        <h1>{props.title}</h1>
        <p>
          <span>Sector:</span> {props.sector}
        </p>
        <p>
          <span>Industry:</span> {props.industry}
        </p>
        <p>
          <span>Workplace:</span> {props.workplace}
        </p>
        <p>
          <span>Application Deadline:</span> {props.deadline}
        </p>
      </div>
      <button>JOB DESCRIPTION</button>
    </div>
  );
}
