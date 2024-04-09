import { useEffect } from 'react';

const Chart = () => {
	useEffect(()=>{
		const canvas = document.getElementById("tutorial");
		if (canvas.getContext) {
			const ctx = canvas.getContext("2d");

// Отличный вариант отрисовать нашу зону видимости, без корректировки угла наклона
    // ctx.strokeRect(250, 150, 50, 150);
// Вот эта история отлично подойдет для отрисовки серой клеточки на фоне
// Но нужно ее сделать в качестве перебора
 ctx.setLineDash([0, 0]);
ctx.strokeStyle = "gray";
 ctx.lineWidth = 0.3;
 for (let i=0; i<360; i=i+20){
 	ctx.beginPath();
 ctx.moveTo(0, i);
 ctx.lineTo(600, i);
 ctx.stroke();
  ctx.closePath();
 }
  for (let i=0; i<590; i=i+20){
 	ctx.beginPath();
 ctx.moveTo(i, 0);
 ctx.lineTo(i, 590);
 ctx.stroke();
 ctx.closePath();
 }
  for (let i=200; i<590; i=i+200){
	ctx.strokeStyle = "black";
	ctx.lineWidth = 0.7;
ctx.beginPath();
 ctx.moveTo(i, 0);
 ctx.lineTo(i, 590);
 ctx.stroke();
 ctx.closePath();
 }
 for (let i=200; i<360; i=i+200){
		ctx.strokeStyle = "black";
ctx.lineWidth = 0.7;
ctx.beginPath();
 ctx.moveTo(0, i);
 ctx.lineTo(600, i);
 ctx.stroke();
 ctx.closePath();
 }
//Ось наклона по У
 ctx.beginPath();
 ctx.lineWidth = 1;
 ctx.setLineDash([10, 10]);
 ctx.moveTo(0, 180);
 ctx.lineTo(600, 180);
 ctx.stroke();
  ctx.closePath();
// Ось наклона по Х
  ctx.beginPath();
 ctx.lineWidth = 1;
 ctx.setLineDash([10, 10]);
 ctx.moveTo(300, 0);
 ctx.lineTo(300, 360);
 ctx.stroke();
  ctx.closePath();
        }
	}, []);

	return ( <>	
		<canvas  id="tutorial" width="590" height="360"></canvas>
		</>
	);
}
 
export default Chart;