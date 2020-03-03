import React from 'react';
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      palavras: [
        "Árvore",
        "Carro",
        "Casa",
        "Natal",
        "Computador"
      ],
      palavraAleatoria: ""
    }
  }

  componentDidMount() {
    this.setState({ palavraAleatoria: this.state.palavras[Math.floor(Math.random() * this.state.palavras.length)] });
  }

  render() {
    return (
      <div className="container">
        <Typography component="div">
          <Box className="titulo" fontSize={32} m={1}>Adivinhe a palavra</Box>
        </Typography>


        <div className="container-caracteres">

          {this.state.palavraAleatoria.split('').map(caracteres => (
            <TextField id="standard-basic" className="caractere" />
          ))}

        </div>

        <p className="palavra">
          {this.state.palavraAleatoria}
        </p>           
        

      </div>

    );
  }
}
export default App;
