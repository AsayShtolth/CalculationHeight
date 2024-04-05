
import './App.css'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { red } from '@mui/material/colors';
import { Box, Slider, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';


function App() {
  const marks = [
    {
      value: 0,
      label: '|',
    },
    {
      value: 15,
      label: '|',
    },
    {
      value: 5,
      label: '|',
    },
    {
      value: 10,
      label: '|',
    },
    {
      value: 20,
      label: '|',
    },
    {
      value: 25,
      label: '|',
    }
    ,
    {
      value: 30,
      label: '|',
    },
    {
      value: 35,
      label: '|',
    },
    {
      value: 40,
      label: '|',
    },
        {
      value: 45,
      label: '|',
    },
        {
      value: 50,
      label: '|',
    },
        {
      value: 55,
      label: '|',
    },
        {
      value: 60,
      label: '|',
    },
        {
      value: 65,
      label: '|',
    },
        {
      value: 70,
      label: '|',
    },
        {
      value: 75,
      label: '|',
    },
        {
      value: 80,
      label: '|',
    },
  ];
  
  // Функции для отображения меток у рандж измения наклона
  function valuetext(value) {
    return `|`;
  }
  
  function valueLabelFormat(value) {
    // Здесь нужно прописать корректировку чтобы отображались значения с минусом
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  return (
    <>
    {/* Шапка */}
      <AppBar position="static"
        sx={{backgroundColor:'#FF0000',
        marginBottom:'49px'}}
      >
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

<div className='container'>
  <div className='container__params'>
    <div className='container__param'>
    <label htmlFor='device' className='content__label content__label_large'><b>Устройство</b></label>
     {/* Select */}
       <FormControl fullWidth>
        <Select
        id='device'
        IconComponent={KeyboardArrowDownIcon}
          defaultValue={30}
          sx={{
            maxHeight:'28px',
            width:'210px',
            fontSize:'14px',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select> 
        </FormControl>
        </div>
        <div className='container__param'>
        <label htmlFor='zoom' className='content__label'><b>CaptureZoom</b></label>
         <FormControl fullWidth>
        <Select
        id='zoom'
        IconComponent={KeyboardArrowDownIcon}
          defaultValue={3}
          sx={{
            height:'28px',
            width:'60px',
            fontSize:'14px',
          }}
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={10}>10</option>
        </Select> 
        </FormControl>
        </div>
        <div className='container__param'>
        <label htmlFor='height' className='content__label'><b>Высота</b></label>
        <FormControl fullWidth>
          <input type='number' id='height' className="params__height__input"></input>
        </FormControl>
        </div>
                <div className="container__param">
         <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 }, 
          '&.Mui-checked': {
            color: '#FF0000'}
         }}/>} label="Стены" />
        </div>
        <Box sx={{ width: '100%' }}> 
        <Typography>Наклон камеры X:0; Y:0</Typography>
        </Box>
  </div>
  
  <div className='container__params'>
        <div className='container__param uncle'>
        <Typography>Х</Typography>
          <Box sx={{ width: 236-28 }}> 
          <Slider
        color={'#ff0000'}
        defaultValue={40}
        getAriaValueText={valuetext}
        step={5}
        valueLabelDisplay="auto"
        marks={marks}
        max={80}
        track={false}
      />
      </Box>
        </div>
        <div className='container__param uncle'>
        <Typography>Y</Typography>
          <Box sx={{ width: 236-28 }}> 
          <Slider
        color={'#ff0000'}
        getAriaValueText={valuetext}
        defaultValue={40}
        step={5}
        valueLabelDisplay="auto"
        marks={marks}
        max={80}
        track={false}
      />
      </Box>
        </div>
        </div>
        <div className='container__params'>
<div className='container__result'>
          <Typography align={'left'} noWrap={true} sx={{fontSize: '12px'}}>Параметры левой камеры</Typography>
          <div className='container__result__param'>
            <Typography   sx={{marginLeft: 'auto', fontSize: '12px'} } >Ширина</Typography>
           <input className='result__param' type='text' value={2.11} style={{fontSize: '12px'}}></input>
            </div>
          <div className='container__result__param'>
          <Typography noWrap={true} sx={{marginLeft: 'auto', fontSize: '12px'} }>От левой стены</Typography>
          <input type='text' className='result__param' style={{fontSize: '12px'}} value={1.9}></input>
          </div>
        </div>
</div>
</div>

    </>
  )
}

export default App
