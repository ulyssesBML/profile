import React from "react";
import Particles from 'react-particles-js';
import Paper from '@material-ui/core/Paper';
import "../App.scss";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import BgParticles from "../components/particle_bg";
import {Link } from "react-router-dom";

import cv from '../static/pdf/UlyssesLara_CV.pdf'; // with import


import Title from "../components/title";

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    textAlign: "center",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Home = () => {
  const classes = useStyles();
  return (
    <div className='inner'>
      <div class="content-div">
        <div class="card-container">
          <Avatar alt="Remy Sharp" src="https://avatars0.githubusercontent.com/u/20913134?s=460&u=d63eedfa2a962142141c913bc888c5962785fe2e&v=4" className={classes.large} />
	        <h3>Ulysses Lara</h3>
	        <h6>Engenhaeiro de Software</h6>
	        <p>Full Stack Developer</p>
	        <div class="buttons">
		        <Link to='/about'>
              <button class="primary" >
			          Saiba Mais
              </button>
            </Link>
		          <a href={cv} target="_blank" class="ghost">
			          Baixar Curriculo
		          </a>
    
	        </div>
          <div class="skills">
              <a href="https://github.com/ulyssesBML" target="_blank" class="button-grey" >
			          GitHub
              </a>
		          <a href="https://www.linkedin.com/in/ulyssesbml/" target="_blank" href="" class="button-grey">
			          Linkedin
		          </a>
	        </div>
	
        </div>

      </div>
      
    </div>
  );
};

export default Home;



