<template>
    <div class="bookingCard">
        <div class="cardBody">
            <div>
                <div class="price">
                    <span>$55</span>
                    <span class="priceDescription">per night</span>
                </div>
                <div class="ratings">
                    <div class="propertyrate" aria-label="rating">
                        <div class="rateIcon">
                            <span class="font-weight-light">
                                <strong>4.1</strong>
                            </span>(17 reviews)
                        </div>
                    </div>
                </div>
                <v-divider class="mt-3 mb-3"></v-divider>
                <div class="datesSelected">
                    <label class="date">
                        <span class="mpwanyi">Dates</span>
                    </label>
                    <div class="dateHolder">
                        <div class="dateDisplay">
                            <div>22/10/2020</div>
                            <div>-></div>
                            <div>22/11/2020</div>
                        </div>
                    </div>
                </div>
                <div class="datesSelected">
                    <label class="date">
                        <span class="mpwanyi">Guests</span>
                    </label>
                    <div class="dateHolder">
                        <div class="dateDisplay1">
                            <div>
                                <v-text-field type="text" prepend-icon="mdi-account"
                                value="2 Guests"></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="datesSelected">
                    <label class="date">
                        <span class="mpwanyi">Extra Message</span>
                    </label>
                    <div class="dateHolder">
                        <div class="dateDisplay1">
                            <div>
                                <v-textarea
                                    name="input-7-1"
                                    label="Message"
                                    hint="Any extra message for the host"
                                ></v-textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <v-btn block class="red lighten-1" dark>Reserve</v-btn>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Booking',
};
</script>
<style scoped lang="scss">
    .bookingCard {
        padding-left: 24px !important;
        padding-right: 24px !important;
        margin: 0px !important;
        border: 1px solid rgb(228, 228, 228) !important;
        background-color: rgb(255, 255, 255) !important;
        font-size: 14px;
        line-height: 1.43;
        color: #484848;

        .cardBody {
            margin-top: 16px;
            margin-bottom: 24px;

            .price {
                line-height: 10px !important;
                margin: 0px !important;
                overflow-wrap: break-word !important;
                font-size: 18px !important;
                font-weight: 800 !important;
                line-height: 1.44444em !important;
                color: rgb(72, 72, 72) !important;

                .propertyPrice {
                    font-size: 22px !important;
                    overflow-wrap: break-word !important;
                    font-size: 18px !important;
                    font-weight: 100 !important;
                    line-height: 1.44444em !important;
                    color: rgb(72, 72, 72) !important;
                }
                .priceDescription {
                    white-space: nowrap !important;
                    box-sizing: border-box;
                    line-height: 10px !important;
                    font-size: 14px;
                    line-height: 1.43;
                    color: #484848;
                }
            }

            .ratings {
                -moz-box-align: center !important;
                align-items: center !important;
                display: inline-flex !important;
                white-space: pre-wrap !important;
                flex-wrap: wrap !important;
                box-sizing: border-box;
                cursor: pointer !important;
                text-align: left !important;
                font-weight: inherit;
                font-family: inherit;
                font-size: 100%;
                line-height: 1.43;
                color: #484848;

                .propertyrate {
                    -moz-box-align: center !important;
                    display: inline-flex !important;
                    white-space: pre-wrap !important;
                    flex-wrap: wrap !important;
                    align-items: center !important;
                    color: rgb(72, 72, 72) !important;
                    box-sizing: border-box;
                    cursor: pointer !important;
                    text-align: left !important;
                    font-family: inherit;
                    font-size: 100%;
                    --page-shell-max-content-width: 1440px !important;
                    line-height: 1.43;

                    .rateIcon {
                        display: inline-flex !important;
                        white-space: pre-wrap !important;
                        flex-wrap: wrap !important;
                        box-sizing: border-box;
                        color: rgb(72, 72, 72) !important;
                        cursor: pointer !important;
                        text-align: left !important;
                        font-weight: inherit;
                        font-family: inherit;
                        font-size: 12px;
                        --page-shell-max-content-width: 1440px !important;
                        line-height: 1.43;
                    }
                }

            }
            .datesSelected {
                margin-top: 16px!important;
                margin-bottom: 8px!important;
                font-size: 14px;
                line-height: 1.43;
                color: #484848;

                .date {
                    font-size: 17px !important;
                    font-weight: 200 !important;
                    margin: 0px !important;
                    padding: 0px 0px 4px !important;
                    line-height: normal;
                    box-sizing: border-box;
                    color: #484848;

                    .mpwanyi {
                        margin: 0px !important;
                        overflow-wrap: break-word !important;
                        font-size: 14px !important;
                        font-weight: 600 !important;
                        line-height: 1.33333em !important;
                        color: rgb(72, 72, 72) !important;
                    }
                }


                    .dateHolder {
                        font-weight: normal !important;
                        font-size: 17px !important;
                        line-height: 24px !important;
                        color: rgb(117, 117, 117) !important;
                        margin: 0px !important;
                        padding: 8px !important;
                        background: rgb(255, 255, 255) none repeat scroll 0% 0% !important;
                        width: 100% !important;
                        vertical-align: middle !important;
                        border: 1px solid rgb(202, 202, 202);
                        border-radius: 2px;

                        .dateDisplay{
                            display: grid!important;
                            grid-template-columns: 40% 20% 40%;
                            text-align: center!important;
                            cursor: pointer;
                        }
                        .dateDisplay1{
                            display: grid!important;
                            grid-template-columns: 100%;
                            text-align: center!important;
                            cursor: pointer;
                        }
                    }
            }
        }
    }
</style>
