const ProgressBar = (props) => {

  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Expérience</span>
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5 ans</span>
      </div>

      <div>
        {
          props.languages.map((item) => {
            let xpYears = 5;
            let progressBar = item.xp / xpYears *100 + '%';

            return (
              <div key={item.id} className="languagesList">
                <li>{item.value}
                  <div className="progressBar" style={{width:progressBar}}></div>
                </li>
              </div>
            )
          })
        }
      </div>

    </div>
  );
};

export default ProgressBar;