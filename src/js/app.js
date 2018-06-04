// import './main.css'

// import Cars from '../data/cars.json';

const axios = require('axios');
var app = new Vue({
	el: '#cars_gallery',
	data: {
		total_cars:[],
		cars: [],
		cars_count: '',
		resource_url: 'http://127.0.0.1:8080/data/cars.json',
		pager_count: '',
		current_pager: ''
	},
	beforeCreate() {
		window.$this = this
	},
	mounted() {
		this.getCars()
	},
	methods: {
		getCars() {
			axios.get('../data/cars.json')
			.then(response => {
				this.total_cars = response.data
				this.cars_count = this.total_cars.length
				this.pager_count = this.cars_count/9
				this.pager_count = Math.ceil(this.pager_count)
				this.make_cars(1) 
			})
			.catch(error => {
				console.log(error)
			})
		},
		updateResource(data){
			this.cars = data
		},
		make_cars(pager) {
			this.current_pager = pager
			this.cars =[]
			for (var i = (pager-1)*9; i <= pager*9 - 1; i++) {
				if (i <= (pager*9)) {
					$this.cars.push($this.total_cars[i])
				}
			}
		},
		image_validation() {
			console.log('dbh')
			if(document.getQuerySelector("#project-upload").files[0].size > 307200){
			       alert("File is too big!");
			       this.value = "";
			    };
		}
	}
})

