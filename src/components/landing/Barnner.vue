<template>
        <v-row class="introDiv">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                <div class="introMsg">
                    <p class="small">Introducing</p>
                    <p class="big">ACRES</p>
                    <p class="small">Unique properties accross east africa.</p>
                    <p>
                        <v-btn large text class="white--text bntFind mt-3">Find Property</v-btn>
                    </p>
                </div>
            </v-col>
        </v-row>
</template>
<script>
export default {
  name: 'Barnner',
};
</script>
<style scoped lang="scss">
    @import '@/styles/fonts.scss';

    .introDiv {
        /* background: linear-gradient(to right, black 60%, white 100%);
        background-size: 100%;
        background-position:left bottom; */
        background-image: url('../../assets/3.jpg');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        height: 450px;
        margin: 0!important;
        position: relative;
        width: 100%!important;
        font-family: 'Montserrat';

        .introMsg {
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);

            .big{
                max-width: 360px !important;
                font-size: 42px !important;
                line-height: 52px !important;
                font-weight: 800 !important;
                color: white!important;
            }
            .small {
                font-size: 18px !important;
                line-height: 26px !important;
                margin-left: 0px !important;
                margin-right: 0px !important;
                color: white!important;
            }
            .bntFind {
                border: .3px solid white;
                background-color: white!important;
                color: black!important;
            }
            .bntFind:hover{
                border: none;
                background-color: rgb(0,0,0, 0)!important;
                color: white!important;
            }

        }
    }

</style>
