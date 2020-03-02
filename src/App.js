import React from 'react';
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './App.css';


class App extends React.Component{
render() {
  return (
    <div className="container">
      <Typography>body1</Typography>
      <TextField id="standard-basic" className="texto"/>
      
      <p>Fonte</p>  
    </div>
    
  );
}
}
export default App;
