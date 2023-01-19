const app = Vue.createApp({})
/* Create Component that we call fetch (identifier)*/
    app.component('fetch', {
        /* Created = Loaded when page is loaded then stops */
    created() {
        this.fetchCities()
      },
      data() {
        return {
            /* cities and id is set to null in the server (not changeable exept id if we delete it)but could as well be initiated as an empty array, like: [] */
          cities: null,
          id: null,
          addName: '',
          addPopulation: ''
        }
      },
      methods: {
        /* Function addCity that is called when the button is clicked */
        addCity() {
            /* We need to fetch again whenever we do GET, POST, PUT or DELETE method */
          fetch('https://avancera.app/cities/', {
            body: JSON.stringify({
                /* In this case we dont use id because the city we are supposed to post has not an id yet */
                /* The tabels we want to post to need to be down here, in this case the name and the population */
                /* We use the input and v-model to get the value from the input and pass it to the empty variables under data above then 
                we tell that name and population is equal to the values we have written in our inputs */
              name: this.addName,
              population: this.addPopulation
            }),
            /* always use a header to the tell the server that it is json that we are sending */
            headers: {
              'Content-Type': 'application/json'
            },
            /* the method we use */
            method: 'POST'
          })
          /* after all is done above we do the promise procedure, remember to use arrow function only in vue */
          /* response should be in json format */
            .then((response) => response.json())
            /* if response says ok we can pass the result of our POST (values on the name and population to the server) */
            .then((result) => {
                /* We tell that citites is the table we want to put the information into */
              this.cities = result
            })
        },
        /* a fetch function that can be used anywhere */
        fetchCities() {
          return fetch('https://avancera.app/cities/')
            .then((response) => response.json())
            .then((result) => {
              this.cities = result
            })
        }
      },
      /* Since this is a widget that can be used in every project there may be we also provide the html code below via the vue template 
      property , we also use template literals to make the coding easier */
    template: `  
    <div id="fetch">
    <label v-bind:style="{'font-size':'22px'}">
    Namn
    <input v-model="addName" placeholder="Namn" v-bind:style="{'font-size':'22px'}">
  </label>
  <label v-bind:style="{'font-size':'22px'}">
    Befolkning
    <input v-model="addPopulation" placeholder="Befolkning" type="number"v-bind:style="{'font-size':'22px'}">
  </label>
  <input v-bind:style="{ 'background-color': '#254034', 'color': 'white', 'font-size':'22px', 'border-radius': '10px' , 'border':'none' ,'padding': '5px 5px', 'margin-left':'20px'}" id="btn" @click="addCity()" type="button" value="Lägg till stad">
  <ul v-if="cities !== null" v-bind:style="{ 'font-size': '22px', 'margin-top': '5vh' }">
    <template v-for="city in cities" >
      <li>
        <template v-if="id !== city.id">
          {{ city.name }}   {{ city.population }}
        </template>
        <input placeholder="Namn" v-else v-model="editName">
      </li>
    </template>
  </ul>
  <p v-else>Laddar...</p>
  </div>
  `
    

    });

app.mount('#app');