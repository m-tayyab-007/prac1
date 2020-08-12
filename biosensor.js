  class Biosensor{
      constructor(name){
          this.person = name;
          this.heartBeat = 0;
          this.runLoop();
      }

      getRandomNumer(min, max) {
        return parseInt(Math.random() * (max - min) + min);
      }
      
    //   getHeartBeat(name){
    //       let person = name;
    //       let heartBeat = this.getHeartBeat(60,75);
    //       console.log("Name : "+this.person + "Heart Beat : "+this.heartBeat);
    //   }

      runLoop(){
          setInterval(()=>{
            let heartBeat = this.getRandomNumer(60,75);
            console.log("Name : "+this.person + "   ------   Heart Beat : "+heartBeat);
          },1000);
      }
  }

  let james = new Biosensor('Elle');