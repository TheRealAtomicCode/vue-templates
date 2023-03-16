# Use the getData() function to fetch data anywhere in your vue app

    import getData from '@/pathOfWhereYouPlacedTheFile/getData.js';

// the data will automatically get populated with the data once the fetch is made.

// to make the fetch, place the loadFunction inside the setup() function for your vue component:

    const [data, error, loadFunction] = getData();

    setup(){

        const url = 'https://example.com/'

        loadFunction(url);

    };
