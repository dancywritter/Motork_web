// import './main.css'

// import Cars from '../data/cars.json';

const axios = require('axios');
var Paginate = require('vuejs-paginate')
Vue.component('paginate', Paginate)

var app = new Vue({
	el: '#cars_gallery',
	data: {
		total_cars:[],
		cars: [],
		cars_count: '',
		resource_url: 'http://127.0.0.1:8080/data/cars.json',
		// pager_count:this.cars_count/9.tofixed(0)
	},
	beforeCreate() {
		window.$this = this
	},
	mounted() {
		this.getCars()
	},
	components: {
		VPaginator: VuePaginator
	},
	methods: {
		getCars() {
			console.log(this.cars)
			axios.get('../data/cars.json')
			.then(response => {
				this.total_cars = response.data
  			// console.log(this.total_cars[0])
  			this.make_cars(1) 
  			// this.updateResource(response.data)
  			// console.log(this.cars)
  			// this.cars_count = this.cars.length
  			// console.log(this.cars_count)
  		})
			.catch(error => {
				console.log(error)
			})
		},
		updateResource(data){
			console.log(data)
			this.cars = data
		},
		make_cars(pager) {
			this.cars =[]
			for (var i = (pager-1)*9; i <= pager*9 - 1; i++) {
    		// console.log(data[i])
    		// if (i <= (pager*8) && (pager*8) <= i*8 ) {
    		if (i <= (pager*9)) {
    			$this.cars.push($this.total_cars[i])
    		}
    	}
    	console.log(this.cars)
    }
}
})

