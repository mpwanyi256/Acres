<template>
    <div>
        <div class="Results">
            <div class="resultsReturned">
                <span class="font-weight-light">200+ stays returned</span>
            </div>
            <div class="placeHighlight">
                <h1 class="placename">Stays In Kampala</h1>
            </div>
            <div class="filters">
                <span class="filterby">
                    <v-btn snall class="ma-2" outlined color="#484848">Price</v-btn>
                    <v-btn snall class="ma-2" outlined color="#484848">2 Bedrooms</v-btn>
                    <v-btn snall class="ma-2" outlined color="#484848">3 Bedrooms</v-btn>
                    <v-btn snall class="ma-2" outlined color="#484848">More</v-btn>
                </span>
            </div>
            <v-divider class="mt-3 mb-3"></v-divider>
            <div class="findingList">
                <Property v-for="i in 6" :key="i" />
            </div>
        </div>
    </div>
</template>
<script>
import Property from '@/components/Search/property.vue';

export default {
  name: 'Listing',
  components: {
    Property,
  },
};
</script>
<style scoped lang="scss">
    .Results {
        display: block;
        font-size: 14px;
        line-height: 1.43;
        color: #484848;
        padding: 20px!important;

        .resultsReturned {
            font-size: 14px !important;
            line-height: 18px !important;
            color: rgb(34, 34, 34) !important;
            padding-bottom: 8px !important;
        }
        .placeHighlight {
            font-size: 32px !important;
            line-height: 36px !important;
            color: rgb(34, 34, 34) !important;
            font-weight: 800 !important;
            .placename{
                color: inherit !important;
                font-size: 1em !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                margin: 0px !important;
                padding: 0px !important;
            }
        }
        .filters {
            padding-right: 0px !important;
            -moz-box-align: left !important;
            align-items: left !important;
            background: rgb(255, 255, 255) none repeat scroll 0% 0% !important;
            display: flex !important;
            position: relative !important;
            width: 100% !important;
            z-index: 4 !important;
            border-bottom: 0px none !important;
            height: 48px !important;
            padding: 0px 24px !important;
            margin-bottom: 15px!important;
            .filterby{
                display: inline-block !important;
                font-size: 14px;
                line-height: 1.43;
                color: #484848;
                margin-top: 15px!important;
            }
        }
        .findingList{
            margin-top: 10px!important;
            padding-right: 0!important;
        }
    }
</style>
