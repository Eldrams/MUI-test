import './App.css'
import { Typography, 
  AppBar, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  CssBaseline, 
  Grid, 
  Toolbar, 
  Container, 
  Button
  } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { red } from '@mui/material/colors';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {

  return (
    <>
      <CssBaseline enableColorScheme/>
      <AppBar position='relative'>
        <Toolbar>
            <PhotoCameraIcon sx={{mx: 2}} />
              <Typography variant='h6'>
                Photo Album
              </Typography>
        </Toolbar>
      </AppBar>
        <div >
          <Container maxWidth="sm">
              <Typography variant='h2' align='center' color="textPrimary" gutterBottom sx={{px: 2 , mt: 4}}>
                Photo Album
              </Typography>
              <Typography variant='h5' align='center' color="textSecondary" paragraph>
                 Hello all, this is a photo album, Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, enim pariatur voluptas in aut a.
              </Typography>
          </Container>
        </div>
        <div>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant='contained' color="primary">
                See My Photos
              </Button>
            </Grid>
            <Grid item >
              <Button variant='outlined' color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia sx={{py: 20, mt: 10}}
                  image='https://source.unsplash.com/random'
                  title="image title"
                  />
                  <CardContent >
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography>
                      dkjsnglksdjfng jksdfnglkj nsdljkfgn lksdjfngkls dfjngklsdjnfg
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              ))}
            </Grid>
        </Container>
        <footer >
            <Typography sx={{p: 1}} container variant='h6' align='center'>
              End
            </Typography>
            <Typography sx={{p: 1}} container variant='subtitle1' align='center'>
              double End losesrsd gdfgl;jdks ds 
            </Typography>
        </footer>
    </>
  )
}

export default App
