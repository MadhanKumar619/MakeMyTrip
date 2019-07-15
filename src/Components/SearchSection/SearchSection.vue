<template>
  <div id="search-section">
      <div class="search-main-head container-fluid">
          <div class="row mx-auto">
              <div class="col-md-5">
                  <h3>Hotels in <span>{{searchDetails.city}}</span></h3>
              </div>              
              <div class="col-md-3 ml-auto">
                  <div class="input-group">
                     <input type="search" placeholder="Search for Hotels" class="form-control"/>
                     <i class="fa fa-search search-head-input"/>
                  </div>
              </div>    
          </div>          
      </div>            
      <div class="container">
        <div class="row">
            <div class="col-md-2 search-main-left">
                Filters
            </div>
            <div class="col-md-9 search-main-right">
                <div class="section-main-card" v-for="(card, index) in cardDetails" v-bind:key="index">
                    <div class="row container">
                        <div class="col-md-3 image-content">
                            <img v-bind:src="card.mainImage" class="img-responsive main-right-img"/>
                            <hr/>
                            <div class="main-right-images">                                
                                <img :src="card.images[0]" v-on:mouseover="card.mainImage=card.images[0]" class="img-responsive right-img"/>                                
                                <img :src="card.images[1]" v-on:mouseover="card.mainImage=card.images[1]" class="img-responsive right-img"/>                                
                                <img :src="card.images[2]" v-on:mouseover="card.mainImage=card.images[2]" class="img-responsive right-img"/>                                
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-9">
                                    <h3 class="main-card-title">{{card.name}}</h3>
                                </div>
                                <div class="col-md-3">
                                    <div class="main-card-rating">
                                        {{card.ratings}}/5                                        
                                    </div>                                    
                                </div>                                
                            </div>                            
                            <div class="row col">{{card.address}}</div>
                            <div class="row col">{{card.nearbyPlace}}</div>                            
                            <div class="row">
                                <ul class="card-facility">
                                    <li v-for="(facility, index) in card.facilities" v-bind:key="index">                                        
                                        <i class="fa fa-check">&nbsp;{{facility}}</i> 
                                    </li>
                                </ul>                                
                            </div>
                            <p>More Option <a href="javascript:void(0)">Pay@Hotel</a></p>
                        </div>
                        <div class="col-md-2 main-inr">
                            <div class="main-inr-facility">
                                PRICE INCLUDES
                                <i class="fa fa-check">&ensp;FreeBreakFast</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import './SearchSection.css'
import {bus} from '../../main';
export default {
  name: 'search-section',
  data: function() {
    return {
      searchDetails : {},
      cardDetails : [{
          mainImage : "/dist/hotel1.jpg", 
          images : ["/dist/hotel1.jpg","/dist/hotel2.jpg","/dist/hotel3.jpg"],
          name : "The Chancery Pavilion",
          ratings : 4.2,
          ratingCounts : 1111,
          address : "Ashok Nagar",
          nearbyPlace : "1.1km from Brigade Road",
          facilities : [
              "Swimming Pool",
              "Parking",
              "HouseKeeping"
          ]
      }]
    }
  },
  mounted : function(){
             
  },
  created :function(){
      bus.$on("searchDetails", (data)=>{
          this.searchDetails = data;
      })
  },
  methods : {               
    changeImage(){
        console.log("hai");
    }
  },
  components : {
      
  }
}
</script>