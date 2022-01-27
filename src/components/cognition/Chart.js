import Chart from "react-apexcharts";
import { Component } from "react";

class SoftSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        fill:{
          colors:'#65c97b'
        },
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          },
          foreColor: '#65c97b',
        },
        xaxis: {
          categories: [
            'Intelligence émotionnelle', 'Résistance au stress','Esprit critique','Collaboration','Organisation','Créativité','Sens du service',"Capacité d'apprentissage",'Communication','Prise de décision'
          ]
        },
      },
      series: [
        {
          data: [4, 1, 5, 3, 5, 3, 4.5, 5, 2.5, 5],
        }
      ],
    };
  }

  render() {
    return (
      <div className="chart">
        <h3>Capacités cognitives</h3>
        <div className="chart-grid">
          <div className="chart-content">
            <Chart options={this.state.options} series={this.state.series} type="radar"/>
          </div>
          <div className="aspie">
            <h4>Syndrome d'Asperger (trouble du spectre de l'autisme - TSA)</h4>
            <div className="aspie-ul">
              <ul>
                <h5>Caractéristiques</h5>
                <li>Difficulté dans la communication verbale et non verbale. La personne peut sembler distante et froide ou à l’inverse, trop familière.</li>
                <li>Altération qualitative des interactions sociales réciproques : difficulté à créer des liens avec d’autres, à avoir des amis, des difficultés dans les échanges émotionnels amicaux et amoureux.</li>
                <li>Intérêts restreints et comportements répétitifs et stéréotypés : une manière de contenir l’anxiété intérieure.</li>
              </ul>
              <ul>
                <h5>Quelques bons côtés du syndrome d'Asperger</h5>
                <li>L’absence de préjugés.</li>
                <li>Une pensée originale et, dans certains cas, des intérêts spécifiques</li>
                <li>Dans un environnement propice, une extraordinaire volonté de s’adapter à la norme, au prix d’efforts considérables, ce qui permet une bonne évolution</li>
                <li>La capacité de percevoir et de mémoriser les détails qu'ont certaines personnes peut leur permettre d’exceller dans certains métiers.</li>
              </ul>
            </div>
            <a href="https://spectredelautisme.com/trouble-du-spectre-de-l-autisme-tsa/informations-caracteristiques-diagnostic-syndrome-d-asperger/">Plus d'informations</a>
          </div>
        </div>
      </div>
    );
  };
}


export default SoftSkills;