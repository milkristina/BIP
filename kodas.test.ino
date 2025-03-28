#include <Adafruit_NeoPixel.h>

#define LED_COUNT 3  
#define LED_PIN 7  
#define BUTTON_BLUE 2   // S1A
#define BUTTON_RED 3    // S2A
#define BUTTON_GREEN 4  // S3A

Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
    pinMode(BUTTON_BLUE, INPUT_PULLUP);
    pinMode(BUTTON_RED, INPUT_PULLUP);
    pinMode(BUTTON_GREEN, INPUT_PULLUP);

    strip.begin(); 
    strip.show(); 
}

void loop() {
    if (digitalRead(BUTTON_BLUE) == LOW) {
        setColor(0, 0, 255); 
    } 
    else if (digitalRead(BUTTON_RED) == LOW) {
        setColor(255, 0, 0); 
    } 
    else if (digitalRead(BUTTON_GREEN) == LOW) {
        setColor(0, 255, 0); 
    } 
    else {
        setColor(0, 0, 0); 
    }
}

void setColor(int red, int green, int blue) {
    for (int i = 0; i < LED_COUNT; i++) {
        strip.setPixelColor(i, strip.Color(red, green, blue));
    }
    strip.show();
}
