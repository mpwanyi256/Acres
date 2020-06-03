<template>
    <v-card height="200" class="mb-2 mx-auto">
        <div class="propertyInfo">
            <div class="Image">
                <v-img height="200" src="../../assets/c1.jpg" />
            </div>
            <div class="Info">
                <div class="propertyType">
                    <span class="propertyMode">
                        <span class="Host">SUPER HOST</span>
                    </span>
                    <div class="propertyType">
                        Entire House
                    </div>
                    <span class="rating">
                        <span class="rate">
                            <span class="rateIcon">
                                <v-icon class="red--text">mdi-star</v-icon>
                            </span>
                            <span class="propertyRateValue">
                                4.8
                            </span>
                            <span class="rateCount">
                                (12)
                            </span>
                        </span>
                    </span>
                </div>
                <div class="propertyDescription">
                    Private and cozy
                </div>
                <div class="amenityPreview">
                    2 guests
                    <span class="dot">.</span>
                    Wifi
                    <span class="dot">.</span>
                    Kitchen
                </div>
                <div class="propertyPrice">
                    <div class="Price">
                        <div class="show">
                            <span>
                                <span class="perMonth">
                                    <span class="previous">
                                        $319
                                    </span>
                                    <span class="discounted">
                                        $300
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-card>
</template>
<script>
export default {
  name: 'Property',
};
</script>
<style scoped lang="scss">
    .propertyInfo {
        display: grid;
        grid-template-columns: 40% 60%;
        .Image{
            v-img{
                border: 1px solid #fff;
                border-radius: 4px;
            }
        }
        .Info {
            -moz-box-flex: 1 !important;
            -moz-box-direction: normal !important;
            -moz-box-orient: vertical !important;
            display: flex !important;
            flex-direction: column !important;
            flex-grow: 1 !important;
            height: 250px !important;
            margin-left: 16px !important;
            .propertyType{
                -moz-box-align: center !important;
                font-size: 14px !important;
                line-height: 18px !important;
                align-items: center !important;
                display: inline-flex !important;
                width: 100% !important;
                --dls19-brand-color: #FF385C !important;
                color: #484848;

                .propertyMode{
                    animation-duration: 0.3s !important;
                    animation-name: keyframe_18jn58a !important;
                    animation-timing-function: ease-in-out !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    font-size: 14px !important;
                    line-height: 18px !important;
                    color: #484848;
                    .Host{
                        background-color: rgb(255, 255, 255) !important;
                        border-radius: 4px !important;
                        border: 1px solid rgb(34, 34, 34) !important;
                        color: rgb(34, 34, 34) !important;
                        display: inline-block !important;
                        font-weight: 600 !important;
                        text-transform: uppercase !important;
                        text-align: center !important;
                        padding: 1px 5px !important;
                        font-size: 12px !important;
                        line-height: 16px !important;
                        box-sizing: border-box;
                        visibility: visible !important;
                    }
                }

                .propertyType{
                    color: rgb(113, 113, 113) !important;
                    flex: 1 1 0% !important;
                    line-height: 20px !important;
                    max-height: 20px !important;
                    overflow: hidden !important;
                    text-overflow: ellipsis !important;
                    display: -webkit-box !important;
                    -webkit-line-clamp: 1 !important;
                    -moz-box-orient: vertical !important;
                    animation-duration: 0.3s !important;
                    animation-name: keyframe_18jn58a !important;
                    animation-timing-function: ease-in-out !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    margin-left: 6px !important;
                }

                .rating {
                    margin-left: 4px !important;
                    animation-duration: 0.3s !important;
                    animation-name: keyframe_18jn58a !important;
                    animation-timing-function: ease-in-out !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    font-size: 14px !important;
                    line-height: 18px !important;
                    color: #484848;
                    .rate {
                        -moz-box-align: center !important;
                        align-items: center !important;
                        display: flex !important;
                        font-weight: 400 !important;
                        font-size: 14px !important;
                        line-height: 18px !important;

                        .rateIcon{
                            color: var(--dls19-brand-color, #FF385C) !important;
                            -moz-box-align: center !important;
                            align-items: center !important;
                            display: flex !important;
                        }
                        .propertyRateValue {
                            color: rgb(34, 34, 34) !important;
                            padding-left: 4px !important;
                            box-sizing: border-box;
                            font-weight: 400 !important;
                            font-size: 14px !important;
                            line-height: 18px !important;
                        }
                        .rateCount {
                            color: rgb(113, 113, 113) !important;
                            font-weight: 400 !important;
                            font-size: 14px !important;
                            line-height: 18px !important;
                            box-sizing: border-box;
                            margin-left: 8px!important;
                            margin-right: 8px!important;
                        }
                    }
                }
            }

            .propertyDescription {
                line-height: 24px;
                max-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-weight: 400 !important;
                color: rgb(34, 34, 34) !important;
                font-size: 18px !important;
                line-height: 24px !important;
            }

            .amenityPreview {
                margin-top: 12px;
                color: rgb(113, 113, 113) !important;
                font-weight: 400 !important;
                font-size: 14px !important;
                line-height: 18px !important;
                max-height: 18px !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                display: -webkit-box !important;
                -webkit-line-clamp: 1 !important;
                -moz-box-orient: vertical !important;
                .dot {
                    color: rgb(113, 113, 113) !important;
                    font-weight: 400 !important;
                    font-size: 14px !important;
                    line-height: 18px !important;
                }
            }

            .propertyPrice {
                -moz-box-flex: 1 !important;
                -moz-box-align: end !important;
                -moz-box-pack: justify !important;
                display: flex !important;
                justify-content: space-between !important;
                align-items: flex-end !important;
                flex-grow: 1 !important;
                box-sizing: border-box;
                --dls19-brand-color: #FF385C !important;
                white-space: normal !important;
                font-size: 14px;
                line-height: 1.43;
                color: #484848;

                .Price {
                    position: relative !important;
                    text-align: right !important;
                    box-sizing: border-box;
                    --dls19-brand-color: #FF385C !important;

                    .show {
                        -moz-box-pack: end !important;
                        -moz-box-align: center !important;
                        align-items: center !important;
                        color: rgb(34, 34, 34) !important;
                        display: flex !important;
                        font-weight: 400 !important;
                        font-size: 18px !important;
                        line-height: 24px !important;
                        justify-content: flex-end !important;

                        span {
                            font-weight: 400 !important;
                            font-size: 18px !important;
                            line-height: 24px !important;
                            color: rgb(34, 34, 34) !important;
                            text-align: right !important;

                            .perMonth{
                                font-weight: 800 !important;
                                box-sizing: border-box;
                                color: rgb(34, 34, 34) !important;
                                font-size: 18px !important;
                                line-height: 24px !important;
                                text-align: right !important;

                                .previous {
                                    border: 0px none !important;
                                    clip: rect(0px, 0px, 0px, 0px) !important;
                                    clip-path: inset(100%) !important;
                                    height: 1px !important;
                                    overflow: hidden !important;
                                    padding: 0px !important;
                                    position: absolute !important;
                                    white-space: nowrap !important;
                                    width: 1px !important;
                                }
                                .discounted {
                                    border: 0px none !important;
                                    clip: rect(0px, 0px, 0px, 0px) !important;
                                    clip-path: inset(100%) !important;
                                    height: 1px !important;
                                    overflow: hidden !important;
                                    padding: 0px !important;
                                    position: absolute !important;
                                    white-space: nowrap !important;
                                    width: 1px !important;
                                }
                            }

                        }
                    }
                }
            }
        }
    }
</style>
