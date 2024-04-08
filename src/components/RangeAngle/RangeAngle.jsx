import { Box, Slider} from '@mui/material';
const RangeAngle = (props) => {
	const valuetext= props.valuetext;
	const marks= props.marks;
  const handle= props.handle;
  const value= props.value;
	return ( 
		<Box sx={{ width: 200 }}> 
          <Slider
        onChange={handle}
        color={'#ff0000'}
        value={value}
        getAriaValueText={valuetext}
        step={5}
        marks={marks}
        max={80}
        track={false}
      />
      </Box>
	);
}
 
export default RangeAngle;