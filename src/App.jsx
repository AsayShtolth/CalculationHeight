
import './App.css'
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box} from '@mui/material';
import Header from './components/Header/Header';
import SelectRed from './components/SelectRed/SelectRed';
import { useState } from 'react';
import RangeAngle from './components/RangeAngle/RangeAngle';
import Chart from './components/Chart/Chart';
// import Canvas from './components/Chart/canvas';

  

function App() {
  const devices=[
    'BrickStream', 'RStat Real 3D', 'RStat Real 2D/Light', 'RStat RealStereo', 'RStat RealStereo Low',
    'RStat RealStereo Hight', 'Stereosensor 3D', 'VIDEOCAMERA 3D 2.8', 'VIDEOCAMERA 3D 3.6',
    'Xovis PC2S', 'Xovis PC3', 'RStat Real 2D/Light от 5.21', 'RStat RealStereo от 5.21',
    'RStat RealStereo 2.0', 'RStat Real 2D 3.0/Light 4.0'
  ]
  const zooms=[3,6,9];

  const [device, setDevice] = useState(devices[0]);
  const [zoom, setZoom] = useState(zooms[0]);
  const [xAngle, setXAngle] = useState(40);
  const [yAngle, setYAngle] = useState(40);
  // Это значение из поля от левой стены - возможно расчетное
  const left=1;
  // Значение из поля ширина
  const widthDevice=2;
  const handleChangeDevice = (event) => {
    setDevice(event.target.value);
  };

  const handleChangeZoom = (event) => {
    setZoom(event.target.value);
  };
    const handleChangeXAngle = (event) => {
    setXAngle(event.target.value);
  };
    const handleChangeYAngle = (event) => {
    setYAngle(event.target.value);
  };
  const marks = [
    {value: 0,label: '|',},
    {value: 5,label: '|',},
    {value: 10,label: '|',},
    {value: 15,label: '|',},
    {value: 20,label: '|',},
    {value: 25,label: '|',},
    {value: 30,label: '|',},
    {value: 35,label: '|',},
    {value: 40,label: '|',},
    {value: 45,label: '|',},
    {value: 50,label: '|',},
    {value: 55,label: '|',},
    {value: 60,label: '|',},
    {value: 65,label: '|',},
    {value: 70,label: '|',},
    {value: 75,label: '|',},
    {value: 80,label: '|',},
  ];
  
  // Функции для отображения меток у рандж измения наклона
  function valuetext() {
    return `|`;
  }
  
  return (
    <>
    <Header/>

<div className='container'>
  <div className='container__params'>
    <div className='container__param'>
    <label htmlFor='device' className='content__label content__label_large'><b>Устройство</b></label>
     <SelectRed 
     value={device}
     handle={handleChangeDevice}
     id={'device'}
     options={devices}
     width={'210px'}/>
        </div>
        <div className='container__param'>
        <label htmlFor='zoom' className='content__label'><b>CaptureZoom</b></label>
      <SelectRed 
        value={zoom}
        handle={handleChangeZoom}
        id={'zoom'}
         options={zooms}
         width={'60px'}/>
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
        <Typography>Наклон камеры X:{xAngle-40}; Y:{yAngle-40}</Typography>
        </Box>
  </div>
  
  <div className='container__params'>
        <div className='container__param uncle'>
        <Typography>Х</Typography>
          <RangeAngle
          valuetext={valuetext}
          marks={marks}
          value={xAngle}
          handle={handleChangeXAngle}
          />
        </div>
        <div className='container__param uncle'>
        <Typography>Y</Typography>
         <RangeAngle
         valuetext={valuetext}
          marks={marks}
          value={yAngle}
          handle={handleChangeYAngle}
         />
        </div>
        </div>
        <Chart
        xAngle={xAngle}
        yAngle={yAngle}
        left={left}
        widthDevice={widthDevice}></Chart>
        <div className='container__params'>
        <div className='container__result'>
          <Typography align={'left'} noWrap={true} sx={{fontSize: '12px'}}>Параметры левой камеры</Typography>
          <div className='container__result__param'>
            <Typography   sx={{marginLeft: 'auto', fontSize: '12px'} } >Ширина</Typography>
           <input className='result__param' type='text' value={2.11} style={{fontSize: '12px'}} disabled></input>
            </div>
          <div className='container__result__param'>
          <Typography noWrap={true} sx={{marginLeft: 'auto', fontSize: '12px'} } >От левой стены</Typography>
          <input type='text' className='result__param' style={{fontSize: '12px'}} value={1.9} disabled></input>
          </div>
        </div>
</div>
</div>

    </>
  )
}

export default App
