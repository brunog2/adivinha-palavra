import React from 'react';
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
      palavraAleatoria: "",
      posicaoLetra: 0
    };

    this.revelarLetra = this.revelarLetra.bind(this);
  }

  componentDidMount() {
    this.setState({ palavraAleatoria: this.state.palavras[Math.floor(Math.random() * this.state.palavras.length)] });    
  }


  revelarLetra() {
    var letra = document.getElementById("letra-digitada");    
    
    var textos = document.getElementsByClassName("caractere");

    var texto;

    for (texto in textos){
      console.log(texto)
    }

    console.log(textos, letra)
    
  }

  render() {
    return (
      <div className="container">
        <Typography component="div">
          <Box className="titulo" fontSize={32} m={1}>Adivinhe a palavra</Box>
        </Typography>

        <div className="container-caracteres">
          {this.state.palavraAleatoria.split('').map((caractere, index) => (
            <TextField
              className="caractere"
              id={index}
              key={index}
              label=""
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
            />
            
          ))}
        </div>

        <p className="palavra">
          {this.state.palavraAleatoria}
        </p>

        <div className="containerButton">
          <TextField id="letra-digitada" label="Digite a letra"></TextField>
          
        </div>

        <div className="containerButton">

        <Button variant="contained" color="primary" className="revelar" onClick={this.revelarLetra}>Revelar letra</Button>

        </div>


      </div>

    );
  }
}
export default App;
