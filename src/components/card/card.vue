<template>
  <!-- <div class="card-container">
    <img
      src="https://i.picsum.photos/id/588/300/500.jpg?hmac=euogEyxb28trjbW51XmYHTpDNel68KNG9ELtzbA6rqo"
      class="card-image"
      alt="card-image"
    />
    <div class="card-content">
      <div class="content">
        <div class="text">{{cardData.name}}</div>
        <div class="sub-text">{{cardData.price}}</div>
      </div>
      <div class="action">
        <button @click="$emit('handle-cta',cardData)">{{ctaText}}</button>
      </div>
    </div>
  </div>-->
  <div class="card-container">
    <div class="img-container">
      <img
        src="https://i.picsum.photos/id/400/300/300.jpg?hmac=7uTHVPGL5rR8rx7-1PQzpzsXIOOczB9zylP5AXBWTeM"
        alt="card-image"
        style="width:100%"
      />
    </div>
    <div class="container">
      <div class="content">
        <div class="text">{{cardData.name}}</div>
        <div class="sub-text">₹{{cardData.price}}</div>
      </div>
      <div class="action">
        <button @click="$emit('handle-cta',cardData)">{{ctaText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import "./card.scss";

import Card from "./card";
export default Card;
</script>