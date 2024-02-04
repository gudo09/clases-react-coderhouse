
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { useState } from 'react'


const ProbandoMUI = () => {
  const [mostrarContrasenia, setmostrarContrasenia] = useState(false);
  
  const cambiarInput = () => {
    setmostrarContrasenia( !mostrarContrasenia )
  };

  return (
    <div>
      <TextField id="outlined-basic" label="Número" variant="outlined" />
      <Button variant="contained">Sumar</Button>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={mostrarContrasenia ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={cambiarInput}
                  edge="end"
                >
                  {mostrarContrasenia ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
    </div>
  )
}

export default ProbandoMUI