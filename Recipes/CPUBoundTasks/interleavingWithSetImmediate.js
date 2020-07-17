const max = 1000000000;
const range = 1000;

// var i = 0
// function cpuBoundTask(callback){
// 	var j = i + range;
// 	while(i < j && i < max){
// 		++i;
// 	}
// 	if(i >= max){
// 		return callback();
// 	}
// 	setImmediate(function(){
// 		cpuBoundTask(callback);
// 	});
// }

function cpuBoundTask(callback, i  = 0) {
	for (let j = 0; j  < range && i < max; j++, i++) {}
	if (i === max) {
		return callback()
	}
	setImmediate(() => cpuBoundTask(callback, i))
}

module.exports = cpuBoundTask;