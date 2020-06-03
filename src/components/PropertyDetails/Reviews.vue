<template>
<div>
    <div v-for="review in reviews" :key="review.title">
        <div class="reviewItem">
            <div>
                <v-avatar>
                    <img :src="review.avatar" alt="John">
                    </v-avatar>
            </div>
            <div>
                <div class="name">
                    <span v-html="review.title"></span>
                </div>
                <div class="date">
                    <span>December, 2019</span>
                </div>
            </div>
        </div>
        <div class="font-weight-light body-2" v-html="review.subtitle"></div>
        <v-divider class="mt-3 mb-3 reviewBorder"></v-divider>
    </div>
</div>
<!--
    <v-list three-line class="mReviews">
      <template v-for="(item, index) in items">

        <v-divider v-if="item.divider" :key="index"
          :inset="item.inset" ></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
-->
</template>
<script>
export default {
  name: 'Reviews',
  data: () => ({
    reviews: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
  }),
};
</script>
<style scoped lang="scss">
    .reviewBorder {
        color: rgb(235, 235, 235)!important;
    }
    .reviewItem {
        margin-bottom: 16px!important;
        display: grid;
        @media screen and (max-width: 500px) {
          grid-template-columns: 20% 80%;
        }
        grid-template-columns: 10% 90%;

        .name {
            margin: 0px !important;
            overflow-wrap: break-word !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            line-height: 1.375em !important;
            color: rgb(72, 72, 72) !important;
        }
        .date{
            margin: 0px !important;
            overflow-wrap: break-word !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            line-height: 1.28571em !important;
            color: rgb(72, 72, 72) !important;
        }
    }
    .message{
        margin: 0px !important;
        overflow-wrap: break-word !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 1.375em !important;
        color: rgb(72, 72, 72) !important;
    }
</style>
