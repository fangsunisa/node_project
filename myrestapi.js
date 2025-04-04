let main = () => {
	const args = process.argv.slice(2);
    console.log("xxxxx Received arguments:", args);
	let hr = 180;
	let age = 30;
	if(args.length > 0){
		hr = args[1];
		age = args[0];
	}
	console.log("xxxxx age:"+age+", hr:"+hr);
	let hrZone = calculateHR(age,hr);
	let result = "xxxxx result -> zone "+hrZone.zone+" | "+hrZone.lb+" - "+hrZone.ub+" bpm";
	console.log(result);

}
 
let calculateHR = (age, hr) => {
	const mhr = 220 - age;
	let ub,lb,zone;
 	if(hr >= (mhr * 0.9) && hr < (mhr * 1.0)){
 		zone = 5;
		lb = (mhr * 0.9);
		ub = (mhr * 1.0);
 	}else if(hr >= (mhr * 0.8) && hr < (mhr * 0.9)){
		zone = 4;
		lb = (mhr * 0.8);
		ub = (mhr * 0.9);
 	}else if(hr >= (mhr * 0.7) && hr < (mhr * 0.8)){
		zone = 3;
		lb = (mhr * 0.7);
		ub = (mhr * 0.8);
 	}else if(hr >= (mhr * 0.6) && hr < (mhr * 0.7)){
		zone = 2;
		lb = (mhr * 0.6);
		ub = (mhr * 0.7);
 	}else if(hr >= (mhr * 0.5) && hr < (mhr * 0.6)){
		zone = 1;
		lb = (mhr * 0.5);
		ub = (mhr * 0.6);
 	}else{
		zone = "Resting";
		lb = 0;
		ub = (mhr * 0.5);
 	}
	return {"zone":zone,"lb":lb,"ub":ub};
}

module.exports = {calculateHR};

main();