<template>
    <div>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                <p>Find a Place to stay</p>
                <div class="searchArea">
                    <div class="searchItem" ref="location">
                        <div class="hint">Location</div>
                        <div>
                           <input type="text" placeholder="Where are you going?"
                           class="searchLocation" />
                        </div>
                    </div>
                    <div class="searchItem">
                        <div class="hint">Checkin {{ date }} , {{ dateSelected }}</div>
                        <div class="description">
                            <v-menu
                                ref="menu"
                                v-model="menu" :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on }">
                                <v-text-field class="searchLocation selectDate"
                                v-model="date" readonly v-on="on"></v-text-field>
                                </template>
                                <v-card>
                                <v-row>
                                    <v-col cols="12" xs="6" sm="6" md="6" lg="6">
                                        <v-date-picker v-model="date" flat
                                            no-title scrollable :min="dateToday">
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary"
                                             ></v-btn>
                                            <v-btn text color="primary"></v-btn>
                                        </v-date-picker>
                                    </v-col>
                                    <v-col cols="12" xs="6" sm="6" md="6" lg="6">
                                        {{dateSelected}}
                                        <v-date-picker v-model="dateSelected" flat
                                            no-title scrollable :min="date"
                                            prev-icon="">
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary"
                                            @click="menu = false">Cancel</v-btn>
                                            <v-btn text color="primary"
                                            @click="$refs.menu.save(date)">OK</v-btn>
                                        </v-date-picker>
                                    </v-col>
                                </v-row>
                                </v-card>
                            </v-menu>
                        </div>
                    </div>
                    <div class="searchItem">
                        <div class="hint">Persons</div>
                        <div>
                           <input type="number" placeholder="Persons"
                           class="searchLocation" autocomplete="off" />
                        </div>
                    </div>
                    <div class="searchItem">
                        <div class="hint">Rooms</div>
                        <div>
                           <input type="number" placeholder="Rooms"
                           class="searchLocation" autocomplete="off" />
                        </div>
                    </div>
                    <div class="searchItemBtn">
                        <v-btn @click="search" small class="pink btnSearch" dark>
                            <v-icon left>mdi-magnify</v-icon>
                            Search</v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
  name: 'SearchArea',

  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    dateToday: new Date().toISOString().substr(0, 10),
    dateSelected: '',
    menu: false,
  }),

  methods: {
    search() {
      this.$router.push('/Search');
    },
  },

};
</script>
<style scoped lang='scss'>

    .find {
        color: rgb(34, 34, 34) !important;
        cursor: default !important;
        font-size: 16px !important;
        line-height: 20px !important;
        box-sizing: border-box;
        text-decoration: underline;
    }

    .searchArea {
        display: grid!important;

        @media screen and(max-width: 360px) { // xs
            grid-template-columns: 50% 50% 50% 50% 50%!important;
        }

        @media screen and(max-width: 500px) { // xs
            grid-template-columns: 50% 50% 50% 50% 50%!important;
        }

        @media screen and(max-width: 960px) { // sm
            grid-template-columns: 50% 50% 50% 50% 50%!important;
        }

        @media screen and(max-width: 1264px) { //md
            grid-template-columns: 30% 30% 15% 15% 10%!important;
        }

        @media screen and(max-width: 1904px) { //lg
            grid-template-columns: 30% 30% 15% 15% 10%!important;
        }

        @media screen and(max-width: 1904px) { //xl
            grid-template-columns: 30% 30% 15% 15% 10%!important;
        }

        // width: 100%;
        border: 0.5px solid #DCDCDC;
        padding: 5px;
        border-radius: 12px !important;
        box-shadow: 0px 2px #CDCDCD;

        .searchItem {
            transition: border-color 0.2s ease 0s !important;
            display: block !important;
            padding: 16px 22px !important;
            cursor: pointer !important;
            position: relative !important;
            z-index: 2 !important;
            line-height: normal;
            box-sizing: border-box;
            color: rgb(34, 34, 34) !important;
            font-family: sans-serif;
            max-height: 60px!important;
            min-height: 60px!important;
            border-right: 1px solid #DCDCDC;

            .hint{
                color: rgb(34, 34, 34) !important;
                font-size: 10px !important;
                line-height: 12px !important;
                font-weight: 800 !important;
                letter-spacing: 0.04em !important;
                text-transform: uppercase !important;
                padding-bottom: 4px !important;
            }
            .searchLocation, .description {
                display: block !important;
                border: 0px none !important;
                margin: 0px !important;
                padding: 0px !important;
                width: 100% !important;
                background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% !important;
                font-size: 14px !important;
                line-height: 18px !important;
                font-weight: 600 !important;
                color: rgb(34, 34, 34) !important;
                text-overflow: ellipsis !important;
                font-family: inherit;
                box-sizing: border-box;
                cursor: pointer !important;
            }

            .selectDate{
                border: 0px none !important;
            }

        }
        .searchItemBtn{
            transition: border-color 0.2s ease 0s !important;
            border-radius: 12px !important;
            display: table !important;
            width: 100%;
            cursor: pointer !important;
            position: relative !important;
            z-index: 2 !important;
            line-height: normal;
            box-sizing: border-box;
            color: rgb(34, 34, 34) !important;
            font-family: sans-serif;
            text-align: center;

            .btnSearch {
                display: table-cell;
                vertical-align: middle;
                margin-top: 10px;
            }
        }
        .searchItem:hover{
            border: 1px solid #DCDCDC !important;
            border-radius: 12px !important;
        }
    }
</style>
