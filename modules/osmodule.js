const os = require('os');
console.log("os type"+os.type());
console.log("platform "+os.platform());
console.log("architecture "+os.arch());
console.log("os release "+os.release());
console.log("temp dir at "+os.tmpdir());
const cpus=os.cpus();
console.log("no of cores "+cpus.length);
for (i in cpus){
    console.log(cpus[i])
}