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
      alfabeto: 'abcdefghijklmnopqrstuvwxyz',
      palavraAleatoria: "",
      letrasAleatorias: ""
    };
    this.revelarLetra = this.revelarLetra.bind(this);
  };

  componentDidMount() {
    var palavraAleatoria = this.state.palavras[Math.floor(Math.random() * this.state.palavras.length)].toUpperCase();
    var palavraAleatoriaEmbaralhada = palavraAleatoria;
    var palavraAleatoriaEmbaralhadaSemRepeticao = ""; 
    var alfabeto =  this.state.alfabeto.split('').sort(function(){return 0.5-Math.random()}).join('').toUpperCase();  

    console.log(alfabeto)
    for (var letra in palavraAleatoriaEmbaralhada){    
      if (alfabeto.includes(palavraAleatoriaEmbaralhada[letra])){        
        alfabeto = alfabeto.replace(palavraAleatoriaEmbaralhada[letra], "");        
      }
    }

      for (var character in palavraAleatoria){
        console.log(palavraAleatoria[character], palavraAleatoriaEmbaralhadaSemRepeticao);
        if (!palavraAleatoriaEmbaralhadaSemRepeticao.includes(palavraAleatoria[character])){
          palavraAleatoriaEmbaralhadaSemRepeticao += palavraAleatoria[character];
        }
      }

    console.log(alfabeto)
    var letrasAleatorias = (palavraAleatoriaEmbaralhadaSemRepeticao.split('').sort(function(){return 0.5-Math.random()}).join('') + alfabeto.substring(0,24-palavraAleatoriaEmbaralhadaSemRepeticao.length).split('').sort(function(){return 0.5-Math.random()}).join('')).split('').sort(function(){return 0.5-Math.random()}).join('');
    console.log(alfabeto, letrasAleatorias);

    this.setState({ palavraAleatoria: palavraAleatoria});
    this.setState({ alfabeto: alfabeto});
    this.setState({ letrasAleatorias: letrasAleatorias});
    
  };

  /*
    Percorrer os nomes, começando com id = 0 e ir comparando com o caractere pra ver se contém na palavra.
    Mostrar a letra em todos os index com id correspondente que o caractere for igual ao selecionado.
  */
  revelarLetra(char) {
    
    var letra = char.caractere.toUpperCase();
    console.log(letra)
    for (var x = 0; x < this.state.palavraAleatoria.length; x++) {
      var letraDaPalavraSecreta = this.state.palavraAleatoria[x].toUpperCase();
      console.log(letraDaPalavraSecreta, letra)
      if (letra === letraDaPalavraSecreta) {
        document.getElementById(x).value = letra.toUpperCase();
        
      };
    };
  };

  render() {
    return (
      <div className="container">
        <Typography component="div">
          <Box className="titulo" fontSize={32} m={1}>Adivinhe a palavra</Box>
        </Typography>

        <div className="container-caracteres">
          {this.state.palavraAleatoria.split('').map((caractere, index) => (
            <TextField
              inputProps={{ min: 0, style: { textAlign: 'center', color: 'rgb(64, 82, 178)' }}}
              className="caractere"
              id={index.toString()}
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

        <div className="container-bt-letras">
        {this.state.letrasAleatorias.split('').map((caractere, index) => (
            <Button 
             variant="contained"
             id={index}
             key={index}
             color="primary"
             className="bt-letras"
             name={caractere}
             style={{maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}}
             onClick={() => this.revelarLetra({caractere})}
             >{caractere}</Button>
          ))}
        </div>

        <div className="container-bt-txt">
          <TextField inputProps={{ min: 0, style: { textAlign: 'center' } }} id="letra-digitada" label="Digite a letra"></TextField>
        </div>

        <div className="container-bt-txt">
          <Button variant="contained" color="primary" className="revelar" onClick={this.revelarLetra}>Revelar letra</Button>
        </div>
      </div>
    );
  }
}
export default App;