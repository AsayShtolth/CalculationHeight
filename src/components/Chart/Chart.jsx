import { Scale } from '@mui/icons-material';
import { useEffect } from 'react';

const Chart = (props) => {

	useEffect(()=>{
		const canvas = document.getElementById("tutorial");
		canvas.width=600;
		canvas.height=360;
		if (window.innerWidth<=650)
			{				
				canvas.width=350;
			}
		let newScale=canvas.width/(props.widthDevice*10+3);
		// console.log('height '+canvas.height/(props.height*10+5));
		// console.log('width '+canvas.width/(props.widthDevice*10+5))
		if(newScale>=canvas.height/(props.height*10*2+3)){
			newScale=canvas.height/(props.height*2*10+3);
			// console.log('change'+newScale);
		}
		if (canvas.getContext) {
			const ctx = canvas.getContext("2d");
			const scale=newScale;
			// canvas.width/35;
// Отличный вариант отрисовать нашу зону видимости, без корректировки угла наклона
    // ctx.strokeRect(250, 150, 50, 150);
// Вот эта история отлично подойдет для отрисовки серой клеточки на фоне
// Но нужно ее сделать в качестве перебора
 ctx.setLineDash([0, 0]);
ctx.strokeStyle = "gray";
 ctx.lineWidth = 0.2;
 for (let i=0; i<canvas.height; i=i+scale){
ctx.beginPath();
 ctx.moveTo(0, i);
 ctx.lineTo(canvas.width, i);
 ctx.stroke();
  ctx.closePath();
 }
  for (let i=0; i<canvas.width; i=i+scale){
 	ctx.beginPath();
 ctx.moveTo(i, 0);
 ctx.lineTo(i, canvas.height);
 ctx.stroke();
 ctx.closePath();
 }
  for (let i=scale*10; i<canvas.width; i=i+(scale*10)){
	ctx.strokeStyle = "black";
	ctx.lineWidth = 0.3;
	ctx.beginPath();
 	ctx.moveTo(i, 0);
 	ctx.lineTo(i, canvas.width);
 	ctx.stroke();
 	ctx.closePath();
 }
 for (let i=scale*10; i<canvas.height; i=i+(scale*10)){
		ctx.strokeStyle = "black";
ctx.lineWidth = 0.3;
ctx.beginPath();
 ctx.moveTo(0, i);
 ctx.lineTo(canvas.width, i);
 ctx.stroke();
 ctx.closePath();
 }
//Ось наклона по У
 ctx.beginPath();
 ctx.lineWidth = 0.7;
 ctx.setLineDash([12, 12]);
 ctx.moveTo(0, props.height*10*scale+scale);
 ctx.lineTo(canvas.width, props.height*10*scale+scale);
 ctx.stroke();
  ctx.closePath();
// Ось наклона по Х
  ctx.beginPath();
 ctx.lineWidth = 0.7;
 ctx.setLineDash([12, 12]);
 ctx.moveTo(props.left*10*scale+ scale, 0);
 ctx.lineTo(props.left*10*scale + scale, canvas.height);
 ctx.stroke();
  ctx.closePath();
//   Отрисовка самого сенсора
   var image = new Image();
    image.src = "./deviceIcon.svg";
    image.onload = function() { 
	ctx.drawImage(image, (props.left*10*scale)-52/2+scale, props.height*10*scale+scale-30/2);  
      };
      ctx.drawImage(image, (props.left*10*scale)-52/2+scale, props.height*10*scale+scale-30/2);
	//   красный квадрат
	console.log(props.height);
	ctx.beginPath();
	ctx.lineWidth = '1';
	ctx.setLineDash([0, 0]);
	ctx.strokeStyle = "red";
	ctx.moveTo(scale, scale);
	ctx.lineTo(props.widthDevice*10*scale+scale, scale);
	ctx.lineTo(props.widthDevice*10*scale+scale, props.height*10*scale*2+scale);
	ctx.lineTo(scale, props.height*10*scale*2+scale);
	ctx.lineTo(scale, scale);
	ctx.stroke();
	ctx.closePath();
	// черные диагонали
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.moveTo(scale, scale);
	ctx.lineTo(props.left*10*scale + scale, props.height*10*scale+scale);
	ctx.lineTo(props.widthDevice*10*scale+scale, scale);
	ctx.moveTo(props.left*10*scale+scale, props.height*10*scale+scale);
	ctx.lineTo(props.widthDevice*10*scale+scale, props.height*10*scale*2+scale);
	ctx.moveTo(props.left*10*scale+scale, props.height*10*scale+scale);
	// ctx.lineTo(scale, 280);
	ctx.moveTo(props.left*10*scale+ scale, props.height*10*scale+scale);
	ctx.lineTo(scale,props.height*10*scale*2);
	ctx.stroke();
	ctx.closePath();
        }
	}, [props.left, props.widthDevice, props.height]);


	return ( <>	
		<canvas  id="tutorial"></canvas>
		</>
	);
}
 
export default Chart;