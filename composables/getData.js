import { ref } from 'vue';

const getData = (url) => {
    const data = ref(null);
    const error = ref(null);

    const load = async (url) => {
        try {
            const promise = await fetch(url);
            if (!promise.ok) {
                throw Error('error loading data...');
            }
            data.value = await promise.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return [ data, error, load ];
};

export default getData;