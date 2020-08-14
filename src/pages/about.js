import React from "react";
import Title from "../components/title";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
//images
import img_senado from '../static/img/senado.jpeg'; 
import img_p1 from '../static/img/p1.png'; 
import img_p2 from '../static/img/p2.png'; 
import img_p3 from '../static/img/p3.png'; 
import img_p4 from '../static/img/p4.png'; 

const myProjects = [
  {
     "nome":"Sistema de Apoio ao Processo Legislativo",
     "projeto":"https://sapl.al.am.leg.br/",
     "codigo":"https://github.com/interlegis/sapl",
     "img":img_p1,
     "sobre":"Em fevereiro de 2019 eu fui contratado para evoluir sistema de apoio ao processo legislativo ou SAPL. O sistema detém um importância grande no cenário legislativo brasileiro proporcionando o serviço de gerir câmaras municipais em seus deveres."
    },
  {
    "nome":"Paranoia de um Cyber Futuro",
    "projeto":"https://www.amazon.com.br/Paranoia-De-Um-Cyber-Futuro/dp/B081HF3WP9",
    "codigo":"https://github.com/ulyssesBML/Paranoia-Cyber-Futuro",
    "img":img_p2,
    "sobre":"Paranoia de um Cyber Futuro é um jogo realizado através do programa de incentivo de desenvolvimento Amazon para aplicações Alexa, que concedia premiações para as aplicações com maior número de usuários e engajamento."
  },
  {
    "nome":"Gerência Mais",
    "projeto":"https://gerenciamais.herokuapp.com/",
    "codigo":"https://github.com/fga-eps-mds/2018.1_Gerencia_mais",
    "img":img_p3,
    "sobre":": O projeto Gerencia mais, foi um projeto da UnB com parceria com o hospital público do Gama, esse projeto teve como o objetivo de facilitar o gerenciamento de salas do hospital."
  },
  {
    "nome":"FGA Game",
    "projeto":"http://fga-game.s3-website-sa-east-1.amazonaws.com/",
    "codigo":"https://github.com/ulyssesBML/fga-game",
    "img": img_p4,
    "sobre":"Para tentar minimizar fatores sociais envolvidos na quarentena, foi desenvolvido um jogo multiplayer da UnB campus Gama que possibilitasse um ambiente descontraído e divertido entre os estudantes."
  },
];


const get_card = (classes,obj) => {
  return (
    <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={obj["img"]}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {obj["nome"]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {obj["sobre"]}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a  class="button" target="_blank" href={obj["projeto"]}>Projeto</a>
            <a  class="button-code" target="_blank" href={obj["codigo"]}>Codigo</a>
          </CardActions>
        </Card>
  )
}

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 545,
    margin: "auto",
    width: "50%",
    padding: "10px",
    
  },
  media: {
    height: 340,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  const projects = myProjects;
  const makeCard = get_card;

  return (
    <div className='inner'>
      <div class="content-div">
        <div class="about-container">
      
        <Title lineContent='Sobre'/>
        <p>
        Engenheiro de Software com graduação prevista para dezembro de 2020. Desenvolvo aplicações web desde 2016.
        Tenho interesse em desenvolvimento de sistemas, ciência de dados, inteligência artificial e desenvolvimentos de
        jogos.
        </p>
        <Title lineContent='Educação'/>
        
  <section class="timeline">
  <ol>
    <li>
      <div>
        <time>2012</time> Curso de inglês em Cultura Norte Americana(CNA). 405 horas.
      </div>
    </li>
    <li>
      <div>
        <time>2013</time> Ensino Médio em Centro Educacional Leonardo da Vinci.
      </div>
    </li>
    <li>
      <div>
        <time>2020</time> Graduação em engenharia de software pela Universidade de Brasília(UnB).
      </div>
    </li>
    <li></li>
  </ol>
  
</section>
        <Title lineContent='Experiências de Trabalho'/>
        <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img_senado}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Senado Federal
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Trabalhei aqui como desenvolvedor de aplicações web. As aplicações contruidas contribuiram para a transparência e o bom funcionamento do poder legislativo no Brasil.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a class="button" target="_blank" href="https://www12.senado.leg.br/institucional/sobre-atividade">Sobre o Senado</a>
          </CardActions>
        </Card>
        </div>
        
        <Title lineContent='Competência'/>
        <div class="skills">
		      <h2>Metodologia</h2>
            <ul>
              <li>Scrum Agile</li>
		          <li>XP</li>
		        </ul>

  	      <h2>Programação</h2>
            <ul>
		        	<li>Python</li>
		        	<li>Javascript</li>
		        	<li>C++</li>
		        	<li>C</li>
		        	<li>NodeJS</li>
		        	<li>LATEX</li>
		        	<li>ELM</li>
		        	<li>Rust</li>
		        	<li>GDScript</li>
		        </ul>

  	      <h2>Back-end</h2>
            <ul>
		        	<li>Django</li>
		        	<li>Django REST API</li>
		        	<li>Express</li>
		        </ul>

  	      <h2>Front-end </h2>
            <ul>
		        	<li>React</li>
		        	<li>VueJS</li>
		        	<li>HTML5</li>
		        	<li>CSS</li>
		        	<li>SASS</li>
		        </ul>

  	      <h2>DevOps</h2>
            <ul>
		        	<li>AWS</li>
		        	<li>Docker</li>
		        	<li>Travis</li>
		        	<li>Vagrant</li>
		        </ul>

          <h2>Idiomas</h2>
		        <ul>
		        	<li>Português</li>
		        	<li>Inglês</li>
		        </ul>
	      </div>
        <Title lineContent='Projetos'/>
          <Grid container spacing={3}>
          {projects.map((value) => (
              <Grid xs={6} key={value} item>
                {makeCard(classes,value)}
              </Grid>
            ))}
          </Grid>
        

        <Title lineContent='Competência'/>
        <div class="skills">
            <ul>
              <li><a class="button" target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/b0b044b7255a8e8815515ddff2c2d8eabcf2f98e">Limpando os dados com Python</a></li>
              <li><a class="button" target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/df25d16f7ba08c423012113240125729f04eb086">Pensamento estatístico em Python 1/2</a></li>
              <li><a class="button" target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/8fbb5f275a9aaac9484cec12efa0b16d52267e18">Aprendizado Supervisionado com scikit-learn</a></li>
              <li><a class="button" target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/d5e4ad5f400b55ad3b023c85cf530c0e95a13484">Melhores Praticas de Visualização de dados em R</a></li>
              <li><a class="button" target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/1ee38cbfe055eccf5aa4b648439d6c6b823a5637">Análise exploratória de dados</a></li>
              <li><a class="button" target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/1cde1d39ce1af7c69789401672f31ce75d05f99b">Deep Learning em Python</a></li>
              
		        </ul>
	      </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
