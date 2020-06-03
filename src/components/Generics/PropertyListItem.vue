<template>
    <v-card to="Details" elevation="2" class="mx-auto propertyItem" max-width="400"
    transition="scroll-x-reverse-transition">
            <v-img class="propImage white--text align-end text-right"
            height="270px" src="../../assets/beta.jpg">
            </v-img>
        <v-card-text>
            <div class="propertyDescription">
                <div class="title">
                    <span>
                        3 Bedroom, Kampala (U)
                    </span>
                </div>
                <div class="about">
                    <span>
                        3 Bedroom, Kampala (U)
                    </span>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
  name: 'PropertyListItem',
};
</script>
<style scoped lang="scss">
    @import '@/styles/fonts.scss';

    .propertyItem {
        border-bottom: 0.2em solid white;
        border-radius: 14px!important;
        cursor: !important;

        .propertyDescription {
            cursor: pointer !important;
            font-family: inherit !important;
            font-size: inherit !important;
            line-height: inherit !important;
            font-weight: inherit !important;
            color: inherit !important;
            text-align: inherit !important;
            list-style: outside none none !important;

            .title {
                font-size: 18px !important;
                line-height: 22px !important;
                max-height: 44px !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                display: -webkit-box !important;
                -webkit-line-clamp: 2 !important;
                -moz-box-orient: vertical !important;
                color: rgb(34, 34, 34) !important;
                font-weight: 600 !important;
            }

            .about {
                font-size: 14px !important;
                line-height: 18px !important;
                max-height: 54px !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                display: -webkit-box !important;
                -webkit-line-clamp: 3 !important;
                -moz-box-orient: vertical !important;
                color: rgb(113, 113, 113) !important;
                font-weight: 400 !important;
                margin-top: 4px !important;

                span {
                    color: rgb(113, 113, 113);
                }
            }
        }
    }
</style>
