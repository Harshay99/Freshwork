const FreshWork = require('./main');
const main = new FreshWork();

try {
    const add = main.create(1, 'one');
    console.log(add);
} catch (error) {
    console.log('Cannot add this key.');
}

try {
    const read = main.read(1);
    console.log(read);
} catch (error) {
    console.log('Cannot read this key.');
}

try {
    const dlt = main.delete(1, 'one');
    console.log(dlt);
} catch (error) {
    console.log('Cannot delete this key.');
}