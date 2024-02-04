import { Grid, Typography } from "@mui/material"


const ProbandoResponsive = () => {
  return (
    <div>
      <Grid container>

        {/* sx es la propiedad style de MUI */}
        <Grid item xs={12} sm={6} md={4} sx={ {backgroundColor: "red"} }>
          {/* como sx sólo se puede usar en componentes, MUI posee el componente Typography para los textos. ej: h3, h4, p, etc*/}
          <Typography variant="h3" sx={ {color: {xs:"lightgray", md:"black"}, fontSize: {xs: "3rem", sm: "1rem"}} }>Primera caja</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={ {backgroundColor: "blue"} }>
          <Typography variant="h3" sx={ {color: {xs:"lightgray", md:"black"}, fontSize: {xs: "3rem", sm: "1rem"}} }>Segunda caja</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={ {backgroundColor: "yellow"} }>
          <Typography variant="h3" sx={ {color: {xs:"lightgray", md:"black"}, fontSize: {xs: "3rem", sm: "1rem"}} }>Tercera caja</Typography>
        </Grid>

      </Grid>
    </div>
  )
}

export default ProbandoResponsive