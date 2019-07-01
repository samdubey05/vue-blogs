let app = new Vue({
    el: '#vueinst',
    data:{
        title: 'Blogs',
        name: 'Samarth',
        website: "10.0.17.152/DevLabs",
        websiteTag: '<a href="google.com">the google website<a>'
    },
    methods: {
        time: function(){
            let today = new Date();
            return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        },
        greet: function(timeOfDay){
            return 'Good' + ' ' + timeOfDay + ' ' + this.name
        }
    }
});
let app2= new Vue({
    el: '.events',
    data: {
        age: 22,
        x: 0,
        y: 0,
        website: "10.0.17.152/DevLabs",
        styling:{
            color: "red"
        },
    },
  
    methods:{
        add: function(){
            this.age++
        },
        subtract: function(){
            this.age--
        },
        updateXY: function(event){
            console.log(event);
            this.x= event.offsetX;
            this.y=event.offsetY;        
        },
        changeColor: function(event){
           (event.offsetX <= 500 )? this.styling.color = "blue" : this.styling.color = "green" 
        },
        clicked: function(){
            alert("Hi")
        }
    }
});
let app3= new Vue({
    el: '.inputEvents',
    data: {
        name: '',
        age: '',
    },
    methods: {
        logName : function(){
        console.log("hello")
        },
        logAge : function(){
            console.log("Yes");
            
        }
    },
   
});
let app4 = new Vue({
    el: '.computed',
    data:{
        a: 0 ,
        b: 0,
        age: 20
    }
})