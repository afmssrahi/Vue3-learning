const app = Vue.createApp({
	data() {
		return {
			title: 'The Finale Empire',
			author: 'Brandon Sanderson',
			age: 45,
		};
	},
	methods: {
		changeTitle(title) {
			// this.title = 'Change title is Words of Randiance';
			this.title = title;
		},
	},
});

app.mount('#app');
