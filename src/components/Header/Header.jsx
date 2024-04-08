import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Typography from '@mui/material/Typography';

const Header = () => {
	return ( 
      <AppBar position={"static"}
        sx={{backgroundColor:'#FF0000',
        marginBottom:'49px'}}>
        <Toolbar>
          <a href='https://support.antivor.ru/'>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          </a>
          <Typography  component="div" sx={{ flexGrow: 1, fontSize: 20 }}>
            Калькулятор  высот
          </Typography>
          <a href='https://support.antivor.ru/pages/faq.php'>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="faq"
            sx={{ mr: 2 }}
          >
            <QuestionMarkIcon />
          </IconButton>
          </a>
        </Toolbar>
      </AppBar>
	);
}
 
export default Header;