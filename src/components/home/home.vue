<template>
  <div class="home-container">
    <div class="header">Best Food App</div>
    <div class="heading-details">
      <div class="heading-info">
        <div class="heading">FAVOURITES</div>
        <div class="sub-heading">Enjoy what you have been ordering!</div>
      </div>
      <div class="cart"></div>
    </div>

    <div class="favourite-container">
      <div v-for="(item,index) in favouriteItems" :key="index" class="favourite-option">
        <card :cardData="item" ctaText="Reorder" @handle-cta="onBtnClick" />
      </div>
    </div>

    <div class="search">
      <input
        type="text"
        placeholder="Search for particular dish or ingredient"
        v-model="searchText"
        @input="filterRecipes()"
      />
    </div>

    <div class="categories-container">
      <div class="heading-details">
        <div class="heading-info">
          <div class="heading">SELECT CATEGORIES</div>
        </div>
        <div class="filter">Filter</div>
      </div>
      <div class="categories-filter">
        <div
          :class="['option',selectedCategory == category.name ? 'selected': '']"
          v-for="(category,index) in categories"
          :key="index"
          @click="filterRecipes(category.name)"
        >
          <img :src="category.image" alt="category-icon" width="30" height="30" />
          <div>{{category.name}}</div>
        </div>
      </div>
    </div>

    <div class="search-results">
      <div v-if="filtered.length">
        <div v-for="(item,index) in filtered" :key="index" class="search-option">
          <card :cardData="item" ctaText="Add to Bag" @handle-cta="onBtnClick" />
        </div>
      </div>
      <div class="no-item-msg" v-else>No Dishes Found</div>
    </div>

    <div v-if="$route.path == '/details'">
      <product-details />
    </div>
  </div>
</template>

<script>
import "./home.scss";

import Home from "./home";
export default Home;
</script>