import Card from '../card';

export default {
  name: 'home',
  components: {
    Card
  },
  data() {
    return {
      recipes: [],
      categories: [],
      filtered: [],
      searchText: '',
      selectedCategory: ''
    }
  },
  computed: {
    favouriteItems() {
      return this.recipes.filter((item) => {
        return item.isFavourite;
      })
    }
  },
  methods: {
    onLoad() {
      fetch(`http://temp.dash.zeta.in/food.php`, {
        method: 'GET',
      }).then(res => res.json()).then((res) => {
        console.log('res', res)
        const { recipes, categories } = res;
        this.recipes = recipes;
        this.categories = categories;
        this.filtered = recipes;
      })
    },
    onBtnClick(item) {
      console.log(item)
    },
    filterRecipes(category) {
      this.selectedCategory = category ? category : '';
      let filtered = this.recipes.filter((item) => {
        return category ? item.category == category
          : item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
      })
      this.filtered = filtered;
    }
  },
  mounted() {
    this.onLoad()
  }
}