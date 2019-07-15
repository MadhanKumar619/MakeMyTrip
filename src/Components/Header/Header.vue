<template>
  <div id="header-main">

    <!-- Navbar  -->
      <nav class="navbar navbar-expand-md bg-white navbar-dark fixed-top">
        <!-- Brand -->
        <div class="container">
            <img src="../../assets/makemytripLogo1.png" alt="MakeMyTrip" class="header-main-img" />

            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <div class="container navbar-menu menu-content-main mt-3">
                <div class="d-flex justify-content-center menu-content mx-auto">              
                    <div :class="{'menu-icons':true, 'menu-icon-flight':true, active : category==='flights'}" v-on:click="category='flights'"><div class="menu-icon-text" >Flights</div></div>
                    <div :class="{'menu-icons':true, 'menu-icon-hotel':true, active : category==='hotels'}" v-on:click="category='hotels'"><div class="menu-icon-text" >Hotels</div></div>
                    <div :class="{'menu-icons':true, 'menu-icon-holiday':true, active : category==='holidays'}" v-on:click="category='holidays'"><div class="menu-icon-text">Holidays</div></div>
                    <div :class="{'menu-icons':true, 'menu-icon-train':true, active : category==='trains'}" v-on:click="category='trains'"><div class="menu-icon-text" >Trains</div></div>
                    <div :class="{'menu-icons':true, 'menu-icon-bus':true, active : category==='buses'}" v-on:click="category='buses'"><div class="menu-icon-text">Buses</div></div>
                    <div :class="{'menu-icons':true, 'menu-icon-cab':true, active : category==='cabs'}" v-on:click="category='cabs'"><div class="menu-icon-text">Cabs</div></div>
                    <div :class="{'menu-icons':true, 'menu-icon-visa':true, active : category==='visa'}" v-on:click="category='visa'"><div class="menu-icon-text">Visa</div></div>
                    <div :class="{'menu-icons':true, 'menu-icon-homevila':true, active : category==='homevila'}" v-on:click="category='homevila'"><div class="menu-icon-text">Homes</div></div>
                    <div :class="{'menu-icons':true, 'menu-icon-giftcard':true, active : category==='giftcards'}" v-on:click="category='giftcards'"><div class="menu-icon-text">GiftCards</div></div>
                    <div class="menu-icons menu-icon-more"><div class="menu-icon-text">More</div></div>              
            </div>          
            </div>
            <div class="navbar-right">
                <div class="btn btn-sm header-btn-log" v-if="curentUsername.length>0" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="header-log-text">Hai</span>
                      {{curentUsername}}<span class="arrow-down">&#8964;</span>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Profile</a>
                        <a class="dropdown-item" href="#" v-on:click="logout">Logout</a>                        
                    </div>
                  </div>

                  <div class="btn btn-sm header-btn-log" data-toggle="modal" data-target="#myModal" v-if="curentUsername.length===0">
                    <span class="header-log-text">my</span>
                      Login or Create Account<span class="arrow-down">&#8964;</span>
                  </div>
            </div>
            </div>             
         </div>
        </nav>
    <!-- End of navbar -->
      <div class="container">
          <div class="row">
              <div class="col-md-3">
                  <img src="../../assets/makemytripLogo.png" alt="MakeMyTrip" class="header-main-img" />
              </div>              
              <div class="col-md-7 ml-auto">     
                  
                  <div class="btn btn-sm header-btn-log" v-if="curentUsername.length>0" id="dropdownMenuButton" data-toggle="dropdown">
                    <span class="header-log-text">Hai</span>
                      {{curentUsername}}<span class="arrow-down">&#8964;</span>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Profile</a>
                        <a class="dropdown-item" href="#" v-on:click="logout">Logout</a>                        
                    </div>
                  </div>

                  <div class="btn btn-sm header-btn-log" data-toggle="modal" data-target="#myModal" v-if="curentUsername.length===0">
                    <span class="header-log-text">my</span>
                      Login or Create Account<span class="arrow-down">&#8964;</span>
                  </div>
                  <!-- Modal Box -->
                    <div class="modal" id="myModal">
                            <div class="modal-dialog">
                                <div class="modal-content">                                                                    
                                    <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->                                    
                                    <div class="modal-body">
                                        <div class="row modal-head">
                                            <div class="col" :class="{active : accountToggle}" v-on:click="accountToggle=true">
                                                PERSONAl ACCOUNT
                                            </div>
                                            <div class="col" v-bind:class="{activeChange : !accountToggle}" v-on:click="accountToggle = false">
                                                MYBIZ ACCOUNT
                                            </div>
                                        </div>    
                                        <div class="row modal-main">
                                            <div class="col" v-if="accountToggle">
                                                <div class="row">
                                                    <div class="col">
                                                        <h4 v-if="isAccountCreate">Create New Account</h4>
                                                        <h4 v-if="!isAccountCreate">Login</h4>
                                                    </div>
                                                    <div class="col text-right" v-if="isAccountCreate">Already a member?<span v-on:click="isAccountCreate=false" class="log-create">Login</span></div>
                                                    <div class="col text-right" v-if="!isAccountCreate">or <span class="log-create" v-on:click="isAccountCreate=true">Create New Account</span></div>                                                    
                                                </div>
                                                <div class="login-content">
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="emailormobileNum">Email or Mobile Number</label>
                                                            <input type="text" class="form-control" id="emailormobile" ref="username" v-on:input="checkPhoneNumber" v-model="username" placeholder="Enter email or Mobile number">                                                            
                                                        </div>
                                                        <div class="form-group" v-if="isPhoneNumber">
                                                            <label for="phonePassword">OTP</label>
                                                            <input type="number" class="form-control" ref="password" id="phonePassword" v-model="phoneOTP" placeholder="Enter OTP"/>
                                                        </div>
                                                        <div class="form-group" v-if="!isPhoneNumber">
                                                            <label for="password">Password</label>
                                                            <div class="input-group">
                                                                <input type="password" class="form-control" id="password" ref="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" v-model="password" placeholder="minimum 8 characters">                                                                
                                                                <a href="javascript:void(0)" class="reset-text" v-if="!isAccountCreate">reset password</a>                             
                                                            </div>                                                            
                                                        </div>
                                                        <div class="form-group container" v-if="!isAccountCreate">
                                                            <div class="custom-control custom-checkbox mr-sm-2">
                                                                <input type="checkbox" class="custom-control-input" id="remember">
                                                                <label class="custom-control-label" for="remember">Remember Me</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>                                                
                                                <div class="btn btn-block btn-primary" v-if="!isAccountCreate" v-on:click="login">Login</div>   
                                                <div class="btn btn-block btn-primary" v-if="isAccountCreate" v-on:click="register">CREATE ACCOUNT</div>   
                                                <div class="text-center log-with-btn" v-if="!isAccountCreate" v-on:click="login">or LOGIN WITH</div>       
                                                <div class="text-center log-with-btn" v-if="isAccountCreate">or CREATE ACCOUNT WITH</div>                                                                                                        
                                                <div class="row mx-auto">                                                    
                                                    <a class="btn btn-social btn-primary active col">
                                                        <span class="fa fa-facebook"></span> &ensp;Login with Facebook
                                                    </a>
                                                    <a class="btn btn-social btn-google col">
                                                        <img src="../../assets/googleLogo.png" width="25px" height="25px" /> &ensp; Login With Google
                                                    </a>
                                                </div>                                                                                     
                                            </div>

                                            <!-- MyBiz Account -->
                                            <div class="col" v-if="!accountToggle">
                                                Mybiz Account
                                            </div>
                                        </div>                                        
                                    </div>                                    
                                </div>
                            </div>
                    </div>
                  <!-- End Of Modal Box -->
              </div>
          </div>               
      </div>             
      <div class="container d-flex menu-search-content">
        <div class="container menu-content-main mt-3">
            <div class="d-flex justify-content-center menu-content">              
                  <div :class="{'menu-icons':true, 'menu-icon-flight':true, active : category==='flights'}" v-on:click="category='flights'"><div class="menu-icon-text" >Flights</div></div>
                  <div :class="{'menu-icons':true, 'menu-icon-hotel':true, active : category==='hotels'}" v-on:click="category='hotels'"><div class="menu-icon-text" >Hotels</div></div>
                  <div :class="{'menu-icons':true, 'menu-icon-holiday':true, active : category==='holidays'}" v-on:click="category='holidays'"><div class="menu-icon-text">Holidays</div></div>
                  <div :class="{'menu-icons':true, 'menu-icon-train':true, active : category==='trains'}" v-on:click="category='trains'"><div class="menu-icon-text" >Trains</div></div>
                  <div :class="{'menu-icons':true, 'menu-icon-bus':true, active : category==='buses'}" v-on:click="category='buses'"><div class="menu-icon-text">Buses</div></div>
                  <div :class="{'menu-icons':true, 'menu-icon-cab':true, active : category==='cabs'}" v-on:click="category='cabs'"><div class="menu-icon-text">Cabs</div></div>
                  <div :class="{'menu-icons':true, 'menu-icon-visa':true, active : category==='visa'}" v-on:click="category='visa'"><div class="menu-icon-text">Visa</div></div>
                  <div :class="{'menu-icons':true, 'menu-icon-homevila':true, active : category==='homevila'}" v-on:click="category='homevila'"><div class="menu-icon-text">Homes</div></div>
                  <div :class="{'menu-icons':true, 'menu-icon-giftcard':true, active : category==='giftcards'}" v-on:click="category='giftcards'"><div class="menu-icon-text">GiftCards</div></div>
                  <div class="menu-icons menu-icon-more"><div class="menu-icon-text">More</div></div>              
           </div>          
         </div>
         <div class="search-content container">
            <div class="row">
                <div class="dropdown">
                <div class="search-box col-md-4 box-1" id="areaMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <h6><b>CITY/HOTEL/AREA/BUILDING</b></h6>
                    <h4><b>{{selectedCity.substr(0,selectedCity.indexOf(','))}}</b></h4>                    
                    <p>{{selectedCity.substr(selectedCity.indexOf(',')+1, selectedCity.length)}}</p>
                      <div class="dropdown-menu" id="areadropdownMenuButton" aria-labelledby="areaMenuButton">                        
                            <input class="form-control" id="myInput" type="text" placeholder="Search..">                            
                            <div class="area-list container" v-on:click="selectedCity=city" v-for="(city, index) in cities" v-bind:key="index">{{city}} <span class="float-right">city</span></div>                                                        
                      </div>
                </div>                
                </div>
                <div class="search-box col">
                    <datepicker v-model="checkInDate" v-on:input="checkInDatehandler"></datepicker>   
                    <h5>Check In</h5>
                    <h4><b>{{this.checkInDateArray[0]}}</b> {{this.checkInDateArray[2]}}'{{this.checkInDateArray[3]}}</h4>
                    <p>{{this.checkInDateArray[1]}}</p>
                </div>                  
                <div class="search-box col">
                    <datepicker v-model="checkOutDate" v-on:input="checkOutDatehandler"></datepicker>   
                    <h5>Check Out</h5>
                    <h4><b>{{this.checkOutDateArray[0]}}</b> {{this.checkOutDateArray[2]}}'{{this.checkOutDateArray[3]}}</h4>
                    <p>{{this.checkOutDateArray[1]}}</p>
                </div>
                <div class="dropdown">                
                <div class="search-box col-md-3 box-4" id="roomsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <h6>ROOMS & GUESTS</h6>
                    <h4><b>{{totalRooms}}</b> Rooms <b>{{totalGuests}}</b> Guests</h4>
                    <div class="dropdown-menu" id="roomsDropdownMenu" aria-labelledby="roomsDropdown">
                        <div class="row container rooms-box" v-for="(room,index) in rooms" v-bind:key="index">
                            <div class="col-md-2"><b>Room{{index+1}}</b></div>
                            <div class="col-md-10" v-if="room.isExpanded">
                                <div class="row">
                                    <div class="col-md-10"><b>{{room.adults}} Adults, {{room.children}} Children</b><span v-on:click="editRooms(index)">&ensp;edit</span></div>
                                    <div class="col-md-2 ml-auto" v-on:click="removeRooms(index)">remove</div>
                                </div>                                
                                <hr class="rooms-hr"/>
                            </div>                            
                            <div class="col-md-10" v-if="!room.isExpanded">
                                <p>ADULTS</p>
                                <p>
                                    <ul class="rooms-list">                                        
                                        <li v-bind:class="{selected : room.adults===1}" v-on:click="checkAdultCount(index, 1)">1</li>
                                        <li v-bind:class="{selected : room.adults===2}" v-on:click="checkAdultCount(index, 2)">2</li>
                                        <li v-bind:class="{selected : room.adults===3}" v-on:click="checkAdultCount(index, 3)">3</li>
                                        <li v-bind:class="{selected : room.adults===4}" v-on:click="checkAdultCount(index, 4)">4</li>
                                        <li v-bind:class="{selected : room.adults===5}" v-on:click="checkAdultCount(index, 5)">5</li>
                                        <li v-bind:class="{selected : room.adults===6}" v-on:click="checkAdultCount(index, 6)">6</li>
                                    </ul>
                                </p>
                                <p>CHILDREN (Age 12y and below)</p>
                                <p>
                                    <ul class="children-list">                                        
                                        <li v-bind:class="{selected : room.children==0}" v-on:click="checkChildrenCount(index, 0)">0</li>
                                        <li v-bind:class="{selected : room.children==1}" v-on:click="checkChildrenCount(index, 1)">1</li>
                                        <li v-bind:class="{selected : room.children==2}" v-on:click="checkChildrenCount(index, 2)">2</li>
                                        <li v-bind:class="{selected : room.children==3}" v-on:click="checkChildrenCount(index, 3)">3</li>
                                        <li v-bind:class="{selected : room.children==4}" v-on:click="checkChildrenCount(index, 4)">4</li>                                        
                                    </ul>
                                </p>                                
                                <p class="btn btn-danger" v-if="roomErrorText.length>0">{{roomErrorText}}</p>                           
                            </div>                                                                                 
                        </div>     
                        <hr/>
                        <div class="container row mx-auto">
                            <div class="btn btn-sm btn-outline-primary" v-on:click="addRoom">+ Add Another Room</div>
                            <div class="btn btn-sm btn-primary ml-auto apply-btn" v-on:click="applyRooms">Apply</div>
                        </div>                   
                    </div>
                </div>
                </div>
                <div class="search-box col box-5">
                    <h6>Traveling For</h6>
                    <p>Select a Reason<br/>(optional)</p>                
                </div>
            </div>            
            <div class="row">                                  
                <div class="btn btn-primary btn-search" v-on:click="searchContent">SEARCH FOR {{category.toUpperCase()}}</div>
            </div>
         </div>            
      </div>          
  </div>
</template>

<script>
import './Header.css';
import firebaseConfig from '../../App/firebaseConfig';
import firebase from 'firebase';
import Datepicker from 'vuejs-datepicker';
import { bus } from '../../main';
firebase.initializeApp(firebaseConfig);
export default {
  name: 'header-main',
  data: function() {
    return{
        accountToggle : true,
        isAccountCreate : false,
        isPhoneNumber : false,
        phoneOTP : "",
        username : "",
        password : "",
        curentUsername :"",
        category : "hotels",
        selectedCity : "Bangalore, India",
        cities : ["New Delhi, India", "Bangkok, Thailand", "Singapore, Singapore", "Mumbai, India", "Bangalore, India", "Goa, India", "Hyderabad, India","Pattaya, Thailand", "Phuket, Thailand"],
        days : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        checkInDate  :new Date(),
        checkOutDate : new Date(),
        checkInDateArray : [],
        checkOutDateArray : [],
        roomErrorText : "",
        rooms : [{
            adults : 1,
            children : 0,
            isExpanded : false
        }],
        totalRooms : 0,
        totalGuests : 0
    }
  },
  mounted : function(){      
        if(localStorage.getItem("MusicHuntUser")!==null){            
            this.curentUsername = localStorage.getItem("MusicHuntUser");
        }
        $(document).ready(function(){                       
            $(".navbar").hide();                        
            $(function () {
                $(window).scroll(function () {                    
                    if ($(this).scrollTop() > 100) {
                        $('.navbar').slideDown("fast");
                    } else {
                        $('.navbar').fadeOut();
                    }
                });
            });
        });            
      this.checkInDate = new Date();
      this.checkInDateArray.push(this.checkInDate.getDate());          
      this.checkInDateArray.push(this.days[this.checkInDate.getDay()]);        
      this.checkInDateArray.push(this.months[this.checkInDate.getMonth()]);
      this.checkInDateArray.push(this.checkInDate.getFullYear().toString().substr(2));
      this.checkOutDate = new Date();
      this.checkOutDateArray.push(this.checkOutDate.getDate());          
      this.checkOutDateArray.push(this.days[this.checkOutDate.getDay()]);        
      this.checkOutDateArray.push(this.months[this.checkOutDate.getMonth()]);
      this.checkOutDateArray.push(this.checkOutDate.getFullYear().toString().substr(2));
      $("#roomsDropdownMenu").click(function(event){
          event.stopPropagation();
      })
      $(".apply-btn").click(function(){
          $("#roomsDropdownMenu").removeClass("show");
      })      
      $(".area-list").click(function(){
          $("#areadropdownMenuButton").removeClass("show");          
      })
      $("#areadropdownMenuButton").click(function(event){          
          event.stopPropagation();
      })
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $(".dropdown-menu div").filter(function() {                
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)                
            });                                                
        });
        $(".dropdown-menu div").click(function(){
            var value = $('#myInput').val().toLowerCase();
            value = "";
            $('#myInput').val("");
            $(".dropdown-menu div").filter(function() {                
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)                
            });
        })
      });

  },
  methods : {
      accountToggleHandler : function(){
          consoel.log(this.accountToggle);
      },
      checkPhoneNumber : function(){          
          var phoneno = /^\d{10}$/;
          if(this.username.match(phoneno)){
              this.isPhoneNumber = true;
          }
          else{
              this.isPhoneNumber = false;
          }
      },
      checkValid : function(){        
        var count = 0;
        if(this.$refs.username.value===""){
            this.$refs.username.focus();
            count++;            
            return false;
        } 
        if(this.$refs.password.value===""){
            this.$refs.password.focus();
            count++;
            return false;
        }       
        if(count===0){
            return true;
        } 
      },
      login : function(){                            
        if(this.checkValid()){
            firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(user=>{                
                var name = firebase.auth().currentUser.email;                                
                this.curentUsername = name.substr(0,name.indexOf("@"));      
                localStorage.setItem("MusicHuntUser", this.curentUsername);          
                
            }).catch(err=>{
                if(err.code === "auth/invalid-email"){
                    this.$refs.username.focus();
                }
            })
        }                
      },
      register : function(){
          if(this.checkValid()){
            firebase.auth().createUserWithEmailAndPassword(this.username, this.password).then(res=>{
                console.log("Account Created Successfuly");
            })
          }
      },
      logout : function(){
          firebase.auth().signOut().then(()=>{
              localStorage.clear();
              this.curentUsername = "";              
          })
      },
      googleLogin : function(){
          var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result){
            console.log(result);
            console.log("Sucessfully linked");
        })
      },
      checkInDatehandler(){                    
          this.checkInDateArray = [];          
          this.checkInDateArray.push(this.checkInDatesearchDetails.getDate());          
          this.checkInDateArray.push(this.days[this.checkInDate.getDay()]);        
          this.checkInDateArray.push(this.months[this.checkInDate.getMonth()]);
          this.checkInDateArray.push(this.checkInDate.getFullYear().toString().substr(2));          
      },
      checkOutDatehandler(){                    
          this.checkOutDateArray = [];          
          this.checkOutDateArray.push(this.checkOutDate.getDate());          
          this.checkOutDateArray.push(this.days[this.checkOutDate.getDay()]);        
          this.checkOutDateArray.push(this.months[this.checkOutDate.getMonth()]);
          this.checkOutDateArray.push(this.checkOutDate.getFullYear().toString().substr(2));          
      },
      editRooms(index){                    
          this.rooms.forEach(val =>{
                val.isExpanded = true;
          })
          this.rooms[index].isExpanded = false;      
          this.applyRooms();    
      },
      checkAdultCount(index, val){
          var total = this.rooms[index].children + val;
          if(total>6){
              this.roomErrorText = "Only 6 members are allowed";
          }
          else{
              this.rooms[index].adults = val;
              this.roomErrorText = "";
          }
      },
      checkChildrenCount(index, val){
          var total = this.rooms[index].adults + val;
          if(total>6){
              this.roomErrorText = "Only 6 members are allowed";
          }else{
              this.rooms[index].children = val;
              this.roomErrorText = "";
          }
      },
      addRoom(){
          if(this.rooms.length<=9){
              var obj = {
                adults : 0,
                children : 0,
                isExpanded : false
              };
            this.rooms.forEach(val =>{
                val.isExpanded = true;
            })
            this.rooms.push(obj);
          }          
          this.applyRooms();
      },
      removeRooms(index){
          console.log(this.rooms);  
          this.rooms.splice(index,1);
          this.applyRooms();
      },
      applyRooms(){
          this.totalRooms = 0 , this.totalGuests = 0;
          this.totalRooms = this.rooms.length;
          this.rooms.forEach(val =>{
              this.totalGuests += val.adults + val.children
          })
      },
      searchContent(){
          var obj = {
              city : this.selectedCity,
              category : this.category,
              checkIn : this.checkInDateArray,
              checkOut : this.checkOutDateArray,
              rooms : this.rooms
          }
          bus.$emit("searchDetails",obj);
          this.$router.push("/search/"+this.category);
      }
  },
  components : {      
      Datepicker
  }
}
</script>