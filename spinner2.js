const loading = ['\r|  ', '\r/  ', '\r-  ', '\r\\  '];
let startingDelay = 100;
process.stdout.write('hello from spinner1.js... \rheyyy\n');

for (let part of loading) {
  setTimeout(() => {
    process.stdout.write(part);
  }, startingDelay);
  
  startingDelay += 200;
}

