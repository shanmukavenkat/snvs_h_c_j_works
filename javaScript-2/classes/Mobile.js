class Mobile {

    constructor(brand,ram,batteryStatus,isCallInProgress,song){
        this.brand = brand;
        this.ram = ram;
        this.batteryStatus = batteryStatus;
        this.isCallInProgress = isCallInProgress;
        this.song = song;
    }
    playMusic(){
        console.log(`Playing ${this.song} Song`);
    }
    stopMusic(){
        console.log( "Music Stopped");
    }
    fullCharge(){
        if(this.batteryStatus < 100){

            console.log("Mobile Fully Charged");
        }else{
            this.batteryStatus = 100
            console.log("Mobile Already Fully Charged");
        }
    }
    makeCall(){
        this.isCallInProgress = true;
        console.log( "Calling...");

    }
    endCall(){
        if(!this.isCallInProgress){
            console.log("No Ongoing Call to End");
        } else{
            this.isCallInProgress= false;
            console.log("Call Ended");

        }

    }
}
/* Please do not modify anything below this line */





    const brand = "Samsung";
    const ram = "16 GB";
    const batteryStatus = 100;
    const song = "Shape of You";
    const isCallInProgress = true;

    /* Please do not modify anything above this line */

    const myMobile = new Mobile(brand,ram,batteryStatus,isCallInProgress,song);

    /* Please do not modify anything below this line */

    myMobile.fullCharge();

    myMobile.playMusic();
    myMobile.stopMusic();

    myMobile.endCall();
    myMobile.makeCall();
    myMobile.endCall();
