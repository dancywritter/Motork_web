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
		current_pager: '',
		file_error:''
	},
	beforeCreate() {
		window.$this = this
		console.log(this.file_error)
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
		}
	}
})
var app2 = new Vue({
	el: '#form-partecipate',
	data: {
		file_error:''
	},
	mounted() {
		this.image_validation()
	},
	methods: {
		image_validation() {
		},
		form_partecipate_onSubmit() {
			this.image_validations()
		},
		image_validations() {
			if (this.file_error == 'File is too big!') {
				return;
			}
		}
	}
})


$('#project-upload').on('change',function(argument) {
	if(this.files[0].size > 5000000) {
		app2.file_error = 'File is too big!'
	}
	else {
		app2.file_error = ''
	}
})


// $('form#form-partecipate').on('submit', function(event){
// 	event.preventDefault();
// 	console.log($('#project-upload').files.size);
// 	if($('#project-upload').files[0].size > 1000000) {
// 		// alert("File is too big!");
// 		app2.file_error = 'File is too big!';
// 	}
// })

