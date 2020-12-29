const fs = require('fs');

class FreshWork {
    files = fs.readFileSync('files.json');
    files = JSON.parse(this.files);

    create(key, value) {
        
        if (this.files[key]) {
            const err = new Error('Invalid');
            throw(err);
        }

        this.files[key] = value;
        const written = JSON.stringify(this.files);
        fs.writeFileSync('files.json', written);
        return 'Added successfully';
    }

    read(key) {
        if (!this.files[key]) {
            const err = new Error('Invalid');
            throw(err);
        }

        return this.files[key];
    }

    delete(key) {
        if (!this.files[key]) {
            const err = new Error('Invalid');
            throw(err);
        }

        delete this.files[key];
        const written = JSON.stringify(this.files);
        fs.writeFileSync('files.json', written);
        return 'Deleted successfully';
    }
}

module.exports = FreshWork;