/* Welcome to week 3 */

const app = Vue.createApp({
  data(){
    return {
      message: "Week 3 with VUE"
    }
  }
});
app.mount('#app');

/* Part 1, events handler */
const handler = Vue.createApp({
  data(){
    return {
      counter: 2,
      name: ''
    }
  },
  methods:{
    add(){
      this.counter++
    },
    reduce(){
      this.counter--
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    }
  }
});
handler.mount('#handler');

/* Part 1 continues with a shopping list */
const shopping = Vue.createApp({
data(){
  return {
    header: 'Shopping-List',
    newItem: '',
    items:[
      {id: 1, label:'Vue ITHS Course'},
      {id:2, label:'Richard branded mugs'}
    ]
  }
}
});
shopping.mount("#shopping-list");

/* Part 2 - Computed vs not Computed */
const computed = Vue.createApp({
  data(){
    return {
      firstName: '',
      counter: 0
    }
  },
  methods: {
    add(){
      this.counter++
    },
    reduce(){
      this.counter--
    }
    
  },
  computed:{
    giveFullName(){
      console.log('Function is running');
      if(this.firstName === ''){
        return '';
      }else{
        return this.firstName + ' ' + 'Bäckman'
      }
    }
  }
});
computed.mount('#computed');

/* Part 3 -Watch- check if there is any changes in a certain variable */
const watcher = Vue.createApp({
  data(){
    return {
      name: '',
      lastName: '',
      fullName: ''
    }
  },
  watch: {
      name(value){
        if(value === 'Erica'){
          this.fullName = value + ' ' + 'Bäckman'; 
        }else{
          this.fullName = value;
        }
      },
      lastName(value){
        if(value !== ''){
          this.fullName = this.name + ' ' + value;
        }else if(value === ''){
          this.fullName = this.name + ' ' + 'Carlsson';
        }
      }

  }
});
watcher.mount('#watcher');