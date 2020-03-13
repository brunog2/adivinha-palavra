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
        "Computador",
        "Dobrado",
        "Criceto",
        "Geleira",
        "Fogo",
        "Pedestal",
        "Arrasto",
        "Dentro",
        "Golfinho ",
        "Forno",
        "Mil",
        "Pronunciar",
        "Magia",
        "Adorno",
        "Kremlin",
        "Capital",
        "Catalunha",
        "Endereços",
        "Entrar",
        "Hoje",
        "Carga",
        "Megafone",
        "Meias",
        "Banho",
        "Headband",
        "Vendedor",
        "Menina",
        "Mendigo"
      ],
      alfabeto: 'abcdefghijklmnopqrstuvwxyz',
      palavraAleatoria: "",
      letrasAleatorias: "",
      chute: "",
      tentativas: 5
    };
    this.revelarLetra = this.revelarLetra.bind(this);
  };

  async componentDidMount() {
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
      console.log(character.toString());
      await this.setState({chute: this.state.chute+character.toString()})
      
      if (!palavraAleatoriaEmbaralhadaSemRepeticao.includes(palavraAleatoria[character])){
        palavraAleatoriaEmbaralhadaSemRepeticao += palavraAleatoria[character];
      }
    }    

    console.log(this.state.chute);

    console.log(alfabeto)
    var letrasAleatorias = (palavraAleatoriaEmbaralhadaSemRepeticao.split('').sort(function(){return 0.5-Math.random()}).join('') + alfabeto.substring(0,24-palavraAleatoriaEmbaralhadaSemRepeticao.length).split('').sort(function(){return 0.5-Math.random()}).join('')).split('').sort(function(){return 0.5-Math.random()}).join('');
    console.log(alfabeto, letrasAleatorias);

    this.setState({ palavraAleatoria: palavraAleatoria});
    this.setState({ alfabeto: alfabeto});
    this.setState({ letrasAleatorias: letrasAleatorias});
    
  };

  verificarSeGanhou(){
    if (this.state.palavraAleatoria === this.state.chute){
      alert("Parabéns! Você ganhou! A palavra era: "+this.state.palavraAleatoria);
      window.location.reload();
    }
  }

  /*
    Percorrer os nomes, começando com id = 0 e ir comparando com o caractere pra ver se contém na palavra.
    Mostrar a letra em todos os index com id correspondente que o caractere for igual ao selecionado.
  */
  async revelarLetra(char) {
    
    var letra = char.caractere.toUpperCase();
    
    console.log("Palavra aleatoria: "+this.state.palavraAleatoria);
    console.log("Chute: "+this.state.chute)
    if (this.state.tentativas === 0){
      alert("Você perdeu. A palavra era: "+this.state.palavraAleatoria);
      window.location.reload();
    }
    
    else if(this.state.palavraAleatoria.includes(letra)){
      for (var x = 0; x < this.state.palavraAleatoria.length; x++) {
        var letraDaPalavraSecreta = this.state.palavraAleatoria[x].toUpperCase();
        console.log(letraDaPalavraSecreta, letra)
        if (letra === letraDaPalavraSecreta) {
          document.getElementById(x).value = letra.toUpperCase();        
          await this.setState({chute: this.state.chute.replace(x.toString(), letra.toUpperCase())});
          console.log("Chute "+this.state.chute);
          this.verificarSeGanhou();
        };
      };
    } else{
      await this.setState({tentativas: this.state.tentativas - 1});
      alert(`Letra incorreta, te restam ${this.state.tentativas} tentativas`);
      
    }
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
      </div>
    );
  }
}
export default App;