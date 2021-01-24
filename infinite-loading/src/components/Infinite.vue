<template>
  <div class='Infinite'>
    <h1>Pokedex</h1>
    <div class='error' v-if='error'>{{ errorMessage }}</div>
    <div class='itemContainer' v-if='loaded'>
			<div class="container">
				<div class="row">
          <div v-for='(item, index) in list' :key='index'>
						<div class="col-sm-6 col-xs-12">
							<div style="width:300px;height:300px;background-color:lightcyan;text-align:center;line-height:55px;" class="rounded-circle">
                <img :src='item.sprites.front_default' width="200" height="200">
                <br>
								<h4>{{ item.id }}. {{ item.name }}</h4>
							</div>
							<br>
						</div>
					</div>
				</div>
			</div>
		</div>
    <infinite-loading @infinite="infiniteHandler" spinner="spiral">
      <div slot="spinner">Loading...</div>
      <div slot="no-more">もう検索データが無いよ！</div>
      <div slot="no-results">検索結果が無い！</div>
    </infinite-loading>
  </div>
</template>

<script>
	import axios from 'axios'

  export default {
    name: 'infinite',
    data() {
      return {
        list: [],
        url: 'https://pokeapi.co/api/v2/pokemon/',
        loaded: true,
        page: 1,
				error: false,
				errorMessage: ''
      };
    },
    methods: {
      infiniteHandler($state) {
        axios
          .get(this.url + (this.page))
					.then(response => {
            if (this.page < 899) {
              this.list.push(response['data']);
              this.page += 1;
              $state.loaded();
            } else {
              $state.complete();
            }
          })
      },
/*       async get_monsters_name () {
				for (let i = this.start; i < this.end; i++) {
					await axios
						.get(this.url + (i + 1))
						.then(response => {
              this.list.push(response['data']);
            })
						.catch(error => {
							this.error = true;
							this.errorMessage = error;
						})
        } 
      }, */
/*       async next_pokemon() {
        this.start = this.start + 20;
        this.end = this.end + 20;
      }, */
/*       async do_load($state) {
        $state.loaded()
      }, */
/*       async process_all($state) {
        await this.get_monsters_name()
        await this.next.next_pokemon()
        await this.do_load($state)
      } */
    }
  }
</script>

<style scoped>

</style>