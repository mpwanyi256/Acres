<template>
    <v-row>
    <v-col cols="12" xs="12">
            <div class="propertyNameSection">
                <h1>Stylish, Modern 2 Bed <br>Apartment in Islington</h1>
                <p class="location">Hoxton, Greater London, England</p>
                <div class="size">
                    <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                </div>
                <v-divider class="mt-3 mb-3"></v-divider>
                <div class="font-weight-light body-1">
                    <span>{{ about }}</span>
                </div>
                <v-divider class="mt-3 mb-3"></v-divider>
                <Amenity :amenities="amenities" />
                <v-divider class="mt-3 mb-3"></v-divider>
                <p class="Amenities">Amenities</p>
                <div class="amanitiesMain">
                    <div>
                        <p>
                            <span><v-icon left>mdi-home</v-icon>Kitchen</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span><v-icon left>mdi-laptop</v-icon>Laptop Friendly Area</span>
                        </p>
                    </div>
                </div>
                <div class="amanitiesMain">
                    <div>
                        <p>
                            <span><v-icon left>mdi-wifi</v-icon>Wifi</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span><v-icon left>mdi-account</v-icon>Iron</span>
                        </p>
                    </div>
                </div>
                <v-divider class="mt-3 mb-3"></v-divider>
                <p class="Amenities">Reviews</p>
                <v-divider class="mt-3 mb-3"></v-divider>
                <Reviews />
            </div>
    </v-col>
    </v-row>
</template>
<script>
import Amenity from '@/components/Generics/AmenityItem.vue';
import Reviews from '@/components/PropertyDetails/Reviews.vue';

export default {
  name: 'About',

  components: {
    Amenity,
    Reviews,
  },

  data() {
    return {
      amenities: [
        { icon: 'mdi-home', title: 'Entire home', description: 'You’ll have the bungalow to yourself.' },
        { icon: 'mdi-home', title: 'Amenities for everyday living', description: 'The host has equipped this place for long stays - kitchen, wifi, washer, and dryer included.' },
        { icon: 'mdi-home', title: 'Guests love this place for long stays', description: '100% of guests who’ve stayed a month or longer have reviewed this place as 5 stars.' },
        { icon: 'mdi-home', title: 'Free cancellation until May 13', description: 'After that, cancel before 4:00 PM on Jun 10 and get a full refund, minus the first 30 days and the service fee.' },
      ],
      about: `Our Bungalow is located in the Echo Park neighborhood, in central Los Angeles.
      The neighborhood is centered around the lake of the same name (as featured in many films) and has been home to many notable people.
      We welcome couples, business travelers, families (with kids) and some furry friends (pets are subject to the discretion of host).
      Enjoy our indoor and outdoor spaces! You’ll love our place because of the coziness, the high ceilings, the views, and especially the location! Welcome!`,
    };
  },

};
</script>
<style scoped lang="scss">
    .amanitiesMain {
        display: grid;
        grid-template-columns: 50% 50%;
        margin-top: 16px!important;
        font-weight: 100px!important;
    }
    .Amenities {
        margin: 0px !important;
        overflow-wrap: break-word !important;
        font-family: sans-serif !important;
        font-size: 16px !important;
        font-weight: 800 !important;
        line-height: 1.375em !important;
        color: rgb(72, 72, 72) !important;
    }
    .propertyNameSection {
        margin-left: -8px !important;
        margin-right: -8px !important;
        font-weight: 100px!important;
        h1 {
            margin: 0px !important;
            overflow-wrap: break-word !important;
            font-size: 32px !important;
            font-weight: 800 !important;
            line-height: 1.125em !important;
            color: rgb(72, 72, 72) !important;
            padding-top: 6px !important;
            padding-bottom: 6px !important;
            font-family: sans-serif;
            box-sizing: border-box;
            --page-shell-max-content-width: 1440px !important;
        }
        .location {
            margin: 0px !important;
            overflow-wrap: break-word !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 1.375em !important;
            color: rgb(72, 72, 72) !important;
        }
        .size {
            display: inline-block !important;
            box-sizing: border-box;
            font-size: 14px;
            line-height: 1.43;
            color: #484848;
            margin-top: 10px;
            p {
                margin: 0px !important;
                overflow-wrap: break-word !important;
                font-family: Helvetica Neue, sans-serif !important;
                font-size: 16px !important;
                font-weight: 400 !important;
                line-height: 1.375em !important;
                color: rgb(72, 72, 72) !important;
            }
        }
    }
    .aboutProperty {
        margin: 0px !important;
        overflow-wrap: break-word !important;
        font-family: Helvetica Neue, sans-serif !important;
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 1.375em !important;
        color: rgb(72, 72, 72) !important;
    }
</style>
