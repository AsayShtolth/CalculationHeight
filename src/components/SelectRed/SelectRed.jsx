import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem } from '@mui/material';


const SelectRed = (props) => {
  const width=props.width;
  const id=props.id;
  const value=props.value;
  const handle = props.handle;
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