import './App.css'
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box} from '@mui/material';
import Header from './components/Header/Header';
import SelectRed from './components/SelectRed/SelectRed';
import { useEffect, useState } from 'react';
import RangeAngle from './components/RangeAngle/RangeAngle';
import Chart from './components/Chart/Chart';
import { Points} from './points';
import { InputNumber } from 'primereact/inputnumber';
  

function App() {

  const devices=[
   'RStat Real 2D/Light от 5.21','RStat RealStereo от 5.21','RStat RealStereo Low', 'Xovis PC2S', 'Xovis PC3','RStat Real 2D 3.0/Light 4.0', '3D RF']
  const minHeights=[
    {
      'device':'3D RF',
      'min':2.5,
      'max':6

    },
    {
      'device':'RStat Real 2D/Light от 5.21',
      'min':3,
      'max':8

    },
    {
      'device':'RStat RealStereo от 5.21',
      'min':3,
      'max':4

    },
    {
      'device':'RStat RealStereo Low',
      'min':2.5,
      'max':3.5

    },
    {
      'device':'Xovis PC2S',
      'min':2.5,
      'max':6

    },
    {
      'device':'Xovis PC3',
      'min':6,
      'max':14

    },
    {
      'device':'RStat Real 2D 3.0/Light 4.0',
      'min':2,
      'max':7.5

    },
  ];
  const zooms=[6,10];

  const [device, setDevice] = useState(devices[0]);
  const [zoom, setZoom] = useState(zooms[0]);
  const [xAngle, setXAngle] = useState(40);
  const [yAngle, setYAngle] = useState(40);
  const [height, setHeight]= useState();
  const [minHeight, setMinHeight]=useState();
  const [maxHeight, setMaxHeight]=useState();
  const [point, setPoint]=useState(Points(height,device, zoom, xAngle-40, yAngle-40));
  useEffect(()=>{
  for (const currentHeight of minHeights){
    if (currentHeight.device===device){
      // console.log(currentHeight);
      // console.log(device);
      setMinHeight(currentHeight.min);
      setMaxHeight(currentHeight.max);
      setHeight(currentHeight.min);
    }
  }
}, [device, minHeight])
useEffect(()=>{
  setPoint(Points(height,device, zoom,xAngle-40, yAngle-40));
  // console.log(xAngle+'-xangle ', yAngle+'-yangle')
  // console.log(point);
}, [device, zoom, height, xAngle, yAngle])

  
  // console.log(device);

  const handleChangeDevice = (event) => {
    setDevice(event.target.value);
    if (event.target.value=='3D RF' || event.target.value=='Xovis PC2S' || event.target.value=='Xovis PC3' || event.target.value=='RStat RealStereo Low' || event.target.value=='RStat RealStereo от 5.21'){
      document.getElementById('CaptureZoom').style.display='none';
    }
    else{
      document.getElementById('CaptureZoom').style.display='block';
    }
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
    const handleChangeHeight = (event) => {
    setHeight(event.target.value);
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
        <div className='container__param' id='CaptureZoom'>
        <label htmlFor='zoom' className='content__label' ><b>CaptureZoom </b></label>
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
          {/* <input type='number' id='height' className="params__height__input" step={0.1} min={2.5} onChange={handleChangeHeight} value={height}></input> */}
        </FormControl>
        <div className="card flex justify-content-center"> <InputNumber style={{}} inputId="minmax-buttons" value={height} onValueChange={handleChangeHeight} mode="decimal" showButtons step={0.1} min={minHeight} max={maxHeight} /></div>
        
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
        left={point.x}
        height={point.y}
        widthDevice={point.x*2}
        ></Chart>
        <div className='container__params'>
        <div className='container__result'>
          <Typography align={'left'} noWrap={true} sx={{fontSize: '12px'}}>Параметры левой камеры</Typography>
          <div className='container__result__param'>
            <Typography   sx={{marginLeft: 'auto', fontSize: '12px'} } >Ширина</Typography>
           <input className='result__param' type='text' value={point.x*2} style={{fontSize: '12px'}} disabled></input>
            </div>
          <div className='container__result__param'>
          <Typography noWrap={true} sx={{marginLeft: 'auto', fontSize: '12px'} } >От левой стены</Typography>
          <input type='text' className='result__param' style={{fontSize: '12px'}} value={point.x} disabled></input>
          </div>
        </div>
</div>
</div>

    </>
  )
}

export default App
