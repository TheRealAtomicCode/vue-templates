# Use the getData() function to fetch data anywhere in your vue app

## import getData from '@/pathOfWhereYouPlacedTheFile/getData.js';

const [data, error, loadFunction] = getData();

// the data will automatically get populated with the data once the fetch is made.

// to make the fetch, place the loadFunction inside the setup() function for your vue component:

setup(){

    const url = 'https://example.com/'

    loadFunction(url);

};
