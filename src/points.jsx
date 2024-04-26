import { X } from '@mui/icons-material';

//
const rad=180/Math.PI;
const rotateX=(y, height, angle)=>{
	angle=angle*rad;
	y=y*Math.cos(angle) - height*Math.sin(angle);
	height=y*Math.sin(angle) - height*Math.cos(angle);
	console.log('y - '+y);
	return y;  
};
const rotateY=(x, height, angle)=>{
	angle=angle*rad;
	x=x*Math.cos(angle) + height*Math.sin(angle);
	height=-x*Math.sin(angle) + height*Math.cos(angle);
	console.log('x - '+x);
	return x;  
};
export function Points(height, device, zoom, xAngle, yAngle){
	// console.log('xAngle - '+xAngle);
	// console.log('yAngle - '+yAngle);
	const RF3D=[
		{
		'id':0,
		'height':2.5,
		'X':1.6,
		'Y':0.95
		},
		{
		'height':3,
		'X':2.7,
		'Y':1.55
		},
		{
		'height':3.5,
		'X':3.8,
		'Y':2.15
		},
		{
		'height':4,
		'X':4.9,
		'Y':2.75
		},
		{
		'height':4.5,
		'X':6,
		'Y':3.35
		},
		{
		'height':5,
		'X':7.5,
		'Y':4
		},
		{
		'height':5.5,
		'X':8.25,
		'Y':4.6
		},
		{
		'height':6,
		'X':9.3,
		'Y':5.2
		},
	]
	const Rstat2DLight521CaptureZoom10=[
	{
		'id':0,
		'height':3,
		'X':1.9,
		'Y':1.1
	},
	{
		'height':3.5,
		'X':2.6,
		'Y':1.5
	},{
		'height':4,
		'X':3.3,
		'Y':1.9
	},{
		'height':4.5,
		'X':4,
		'Y':2.4
	},{
		'height':5,
		'X':4.7,
		'Y':2.8
	},{
		'height':5.5,
		'X':5.3,
		'Y':3.2
	},{
		'height':6,
		'X':6,
		'Y':3.6
	},{
		'height':6.5,
		'X':6.7,
		'Y':4
	},{
		'height':7,
		'X':7.4,
		'Y':4.5
	},{
		'height':7.5,
		'X':8.1,
		'Y':4.9
	},{
		'height':8,
		'X':8.8,
		'Y':5.3
	}
];
	const Rstat2DLight521CaptureZoom6=[
	{
		'id':0,
		'height':3,
		'X':0.7,
		'Y':0.5
	},{
		'height':3.5,
		'X':1.1,
		'Y':0.7
	},{
		'height':4,
		'X':1.5,
		'Y':0.9
	},{
		'height':4.5,
		'X':1.9,
		'Y':1.2
	},{
		'height':5,
		'X':2.3,
		'Y':1.4
	},{
		'height':5.5,
		'X':2.6,
		'Y':1.6
	},{
		'height':6,
		'X':3.4,
		'Y':1.8
	},{
		'height':6.5,
		'X':3.4,
		'Y':2
	},{
		'height':7,
		'X':3.8,
		'Y':2.3
	},{
		'height':7.5,
		'X':4.2,
		'Y':2.5
	},{
		'height':8,
		'X':4.6,
		'Y':2.7
	}
];
	const  RstatStereo521 =[
	{
		'id':0,
		'height':3,
		'X':1.9,
		'Y':1.2
	},{
		'height':3.5,
		'X':2.4,
		'Y':1.6
	},{
		'height':4,
		'X':2.8,
		'Y':2
	}
]
	const RstatStereoLow=[
	{
		'id':0,
		'height':2.5,
		'X':1.5,
		'Y':1.1
	},{
		'height':3,
		'X':2.2,
		'Y':1.55
	},{
		'height':3.5,
		'X':3,
		'Y':2.15
	}
];
	const XovisPC2S=[
		{
			'id':0,
			'height':2.5,
			'X':2.26,
			'Y':1.46
		},{
			'height':3,
			'X':3.53,
			'Y':2.1
		},{
			'height':3.5,
			'X':4.69,
			'Y':2.95
		},{
			'height':4,
			'X':5.84,
			'Y':3.68
		},{
			'height':4.5,
			'X':7,
			'Y':4.41
		},{
			'height':5,
			'X':7,
			'Y':5
		},{
			'height':5.5,
			'X':7,
			'Y':5
		},
		{
			'height':6,
			'X':7,
			'Y':5
		},
	];
 		const XovisPC3=[
		{
			'id':0,
			'height':6,
			'X':5.25,
			'Y':4.35
		},{
			'height':7,
			'X':6.77,
			'Y':5.49
		},{
			'height':8,
			'X':8,
			'Y':6
		},{
			'height':9,
			'X':8,
			'Y':6
		},{
			'height':10,
			'X':8,
			'Y':6
		},{
			'height':11,
			'X':8,
			'Y':6
		},{
			'height':12,
			'X':8,
			'Y':6
		},{
			'height':13,
			'X':8,
			'Y':6
		},{
			'height':14,
			'X':8,
			'Y':6
		}	
];
const Rstat2DLight4CaptureZoom6=[
	{
		'id':0,
		'height':2,
		'X':0.5,
		'Y':0.35
	},{
		'height':2.5,
		'X':1.1,
		'Y':0.85
	},{
		'height':3,
		'X':1.7,
		'Y':1.3
	},{
		'height':3.5,
		'X':2.3,
		'Y':1.75
	},{
		'height':4,
		'X':2.9,
		'Y':2.25
	},{
		'height':4.5,
		'X':3.5,
		'Y':2.7
	},{
		'height':5,
		'X':4,
		'Y':3.1
	},{
		'height':5.5,
		'X':4.5,
		'Y':3.55
	},{
		'height':6,
		'X':5.1,
		'Y':4
	},{
		'height':6.5,
		'X':5.65,
		'Y':4.5
	},{
		'height':7,
		'X':6.2,
		'Y':4.9
	},{
		'height':7.5,
		'X':6.8,
		'Y':5.4
	}
];
const Rstat2DLight4CaptureZoom10 =[
	{
		'id':0,
		'height':2,
		'X':1.8,
		'Y':1.2
	},{
		'height':2.5,
		'X':3.1,
		'Y':.2
	},{
		'height':3,
		'X':4.4,
		'Y':3.2
	},{
		'height':3.5,
		'X':5.7,
		'Y':4.2
	},{
		'height':4,
		'X':6.7,
		'Y':5
	},{
		'height':4.5,
		'X':7.7,
		'Y':5.7
	},{
		'height':5,
		'X':8.7,
		'Y':6.5
	},{
		'height':5.5,
		'X':9.7,
		'Y':7.3
	},{
		'height':6,
		'X':10,
		'Y':8
	},{
		'height':6.5,
		'X':10.7,
		'Y':8.65
	},{
		'height':7,
		'X':11.5,
		'Y':9.3
	},{
		'height':7.5,
		'X':12,
		'Y':10
	}
]
	let pointsTable;
	switch(device){
		case '3D RF':
        pointsTable=RF3D;
		RstatStereo521
        break;
		case 'RStat RealStereo от 5.21':
        pointsTable=RstatStereo521;
        break;
		case 'RStat RealStereo Low':
        pointsTable=RstatStereoLow;
        break;
		case 'RStat Real 2D/Light от 5.21':
		if (zoom==6){
			pointsTable=Rstat2DLight521CaptureZoom6;
		}
		else{
			pointsTable=Rstat2DLight521CaptureZoom10;
		}
        break;
      case 'Xovis PC2S':
        pointsTable=XovisPC2S;
        break;
      case 'Xovis PC3':
        pointsTable=XovisPC3;
        break;
	case 'RStat Real 2D 3.0/Light 4.0':
		if (zoom==6){
			pointsTable=Rstat2DLight4CaptureZoom6;
		}
		else{
			pointsTable=Rstat2DLight4CaptureZoom10;
		}
        break;

    }

	// console.log(pointsTable);
	let sizeX=0;
	let sizeY=0;
	//смотрим попала ли высота точно в замер
	for(const point of pointsTable ){

		// console.log(point.height+' heigh of point - HEIGHT'+height)
		if (height==point.height)
		{			  
			sizeX=point.X/2;
			sizeY=point.Y/2;
			// console.log(sizeX);
				// Делаем поворот 
	sizeY=rotateX(sizeY, height, xAngle);
	sizeX=rotateY(sizeX, height, yAngle);
	console.log(sizeX+'-x, '+sizeY+'-y')
			return {'x':sizeX, 'y':sizeY}
		}		
	}
	
	if (sizeX==0 && sizeY==0){
		let oldPoint;
		for(const point of pointsTable){
			if(point.height>height){
				// oldPoint=point;
				if (point.id!=0){
					let deltaH=point.height-oldPoint.height;
					let deltaX=point.X-oldPoint.X;
				let deltaY=point.Y-oldPoint.Y;
				let a = (height- oldPoint.height)
				sizeX=((oldPoint.X+((a*deltaX)/deltaH))/2).toFixed(2);
				sizeY=((oldPoint.Y+((a*deltaY)/deltaH))/2).toFixed(2);
				}				
			}
				oldPoint=point;
		}
		
	}
	// Делаем поворот 
	sizeY=rotateX(sizeY, height, xAngle);
	sizeX=rotateY(sizeX, height, yAngle);
	console.log(sizeX+'-x, '+sizeY+'-y')
	return {'x':sizeX, 'y':sizeY};
}
