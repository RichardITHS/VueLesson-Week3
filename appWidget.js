/* Creating a VUE App */
const app = Vue.createApp({})

/* creating a componenent called fetch also called as a term: ("identifier") */
app.component('fetch',{
    /* Created = Fetch loads in the webpage at start then stops */
    created(){
        this.fetchCities()
    },
    data(){
        return{
            /* cities and id is set to null in the server (not changable) */
            /* Create variable for the table in the server called cities */
            cities: null,
            /* create variable for the id that is always found in a table in the database */
            id: null,
            /* create a variable that takes in a new value, in this case the name of the city */
            addName: '',
            /* create a variable that takes in a new value, in this case the population */
            addPopulation: ''
        }
    },
    methods:{
        /* Creating the GET fetch function */
        fetchCities(){
            return fetch('https://avancera.app/cities')
            /* We need to get the promise procudure done (remember the arrow functions!)*/
            .then((response) => response.json())
            .then((result) => {
                this.cities = result
            })
        },
        addCity(){
            /* no return this time, we are not returning anything, just sending */
            fetch('https://avancera.app/cities',{
                /* Body with json */
            body: JSON.stringify({
                /* name and population is the columns that exists on the server */
                name: this.addName,
                population: this.addPopulation
            }),
            headers: {
                'Content-type': 'application/json'
            },
            /* Telling the server that we eant to post data */
            method: 'POST'

        })
        .then((response) => response.json())
        /* Getting an result of the action we done*/
        .then((result) =>
        /* We telling what we want to do with the result, in this case save it in the citites data variable */
        this.cities = result)
        }
        /* Lunchtime at 02:54 */
    },
    /* start again **new recording** */
    template: `
    <div id="fetch">
    <label v-bind:style="{'font-size':'22px'}>Name</label>

    </div>
    `
})

/* Mounting the app to webpage and html */
app.mount('#app')