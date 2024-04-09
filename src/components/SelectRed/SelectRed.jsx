import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem } from '@mui/material';


const SelectRed = (props) => {
  const width=props.width;
  const id=props.id;
  const value=props.value;
  const handle = props.handle;
  const paramUnic =[
    {
    device:'BrickStream',
    label:'Линза',
    options:[2,2.5,3.8 ]
  },
  {
    device:'RStat Real 2D/Light',
    label:'CaptureZoom',
    options:[6,10 ]
  },
  {
    device:'RStat RealStereo',
    label:'CaptureZoom',
    options:[6,10]
  },
  {
    device:'RStat Real 2D/Light от 5.21',
    label:'CaptureZoom',
    options:[6,10]
  },
  {
    device:'RStat Real 2D 3.0/Light 4.0',
    label:'CaptureZoom',
    options:[6,10]
  }
  ] 
	return ( 
        <Select
        value={value}
        onChange={handle}
        id={id}
        IconComponent={KeyboardArrowDownIcon}
          sx={{
            maxHeight:'28px',
            width:{width},
            fontSize:'14px',
          }}
        >
            {
            props.options.map( option => (
               <MenuItem value={option} key={option}>{option}</MenuItem>
            )
              
            )
          }
        </Select> 
	);
}
 
export default SelectRed;