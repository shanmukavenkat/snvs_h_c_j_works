class Laptop {
    constructor(color, brand, battery, notifications) {
        this.color = color;
        this.brand = brand;
        this.battery = battery;
        this.notifications = notifications;
        this.isTurnOn = false;
    }

    turnOn() {
        this.isTurnOn = true;
    }

    turnOff() {
        this.isTurnOn = false;
    }
    message(){
        console.log("You got a message");
    }
    getNotification(){

        this.notifications++;
        console.log(`You have ${this.notifications} notifications`);
    }
    clearNotifications(){
        console.log("Notifications are cleared");
    }

}

/* Please do not modify anything below this line */

function main() {

    const color = "black";
    const brand = "Dell";
    const battery = 100;
    const notifications = 0;

    const laptop1 = new Laptop(color, brand, battery, notifications);

    laptop1.turnOn(); //The Laptop is turned on.
    laptop1.getNotification(); // Increment the notifications by 1.
    laptop1.message(); // 'You got a message' will be logged.
    laptop1.getNotification(); // Increment the notifications by 1.
    laptop1.clearNotifications(); // 'Notifications are cleared' will be logged.
}