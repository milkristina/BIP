#include <Adafruit_NeoPixel.h>

#define LED_PIN 6      
#define LED_COUNT 196 
#define NUM_PATTERNS 5

const int BUTTONS[NUM_PATTERNS] = {2, 3, 4, 5, 7};
int buttonStates[NUM_PATTERNS] = {HIGH};

Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  for (int i = 0; i < NUM_PATTERNS; i++) {
    pinMode(BUTTONS[i], INPUT_PULLUP);
  }
  
  strip.begin();       
  strip.show(); 
  strip.setBrightness(50);
}

void loop() {
  for (int i = 0; i < NUM_PATTERNS; i++) {
    buttonStates[i] = digitalRead(BUTTONS[i]);
    
    if (buttonStates[i] == LOW) {
      applyPattern(i + 1); 
      delay(200);
      while(digitalRead(BUTTONS[i]) == LOW);
    }
  }
}

void setLEDs(int ledNumbers[], int size, uint32_t color) {
  for (int i = 0; i < size; i++) {
    int ledIndex = ledNumbers[i] - 1; 
    if (ledIndex >= 0 && ledIndex < LED_COUNT) {
      strip.setPixelColor(ledIndex, color);
    }
  }
}

void applyPattern(int patternNumber) {
  strip.clear();
  
  switch (patternNumber) {
    case 1: {
      // 2
      int red1[] = {3, 18, 33, 36, 55, 65, 69, 89, 112, 122, 129, 146, 168, 177, 180};
      int white1[] = {5, 9, 10, 24, 27, 30, 40, 45, 49, 62, 76, 80, 84, 86, 94, 97, 101, 117, 132, 136, 140, 142, 149, 153, 157, 171, 174, 187, 188, 192, 194};
      int blue1[] = {4, 11, 21, 52, 58, 72, 104, 108, 114, 124, 162, 164, 186, 193};
      int specia11[] = {91, 92, 105, 106, 107, 119, 120};
      
      setLEDs(red1, sizeof(red5)/sizeof(red5[0]), strip.Color(255, 0, 0));
      setLEDs(white1, sizeof(white5)/sizeof(white5[0]), strip.Color(255, 255, 255));
      setLEDs(blue1, sizeof(blue5)/sizeof(blue5[0]), strip.Color(0, 0, 255));
      setLEDs(special1, sizeof(special5)/sizeof(special5[0]), strip.Color(225, 225, 255));
      break;
    }
      
    case 2: {
      // 3
      int red2[] = {17};
      int white2[] = {2};
      int blue2[] = {3};
      int special2[] = {91, 92, 105, 106, 107, 119, 120};
      
      setLEDs(red2, sizeof(red2)/sizeof(red2[0]), strip.Color(255, 0, 0));
      setLEDs(white2, sizeof(white2)/sizeof(white2[0]), strip.Color(255, 255, 255));
      setLEDs(blue2, sizeof(blue2)/sizeof(blue2[0]), strip.Color(0, 0, 255));
      setLEDs(special2, sizeof(special2)/sizeof(special2[0]), strip.Color(225, 225, 255));
      break;
    }
      
    case 3: {
      // 4
      int red3[] = {17, 22, 24, 27, 73, 77, 80, 111, 124, 133, 138, 147, 157, 188, 192, 194};
      int white3[] = {4, 9, 18, 21, 26, 30, 33, 41, 44, 50, 52, 58, 61, 64, 69, 74, 75, 76, 84, 89, 103, 109, 110, 118, 121, 122, 125, 128, 135, 136, 137, 142, 149, 171, 175, 177, 181, 16, 187, 191, 193};
      int blue3[] = {5, 10, 35, 49, 56, 86, 102, 139, 153, 161, 163, 168, 185, 195};
      int special3[] = {91, 92, 105, 106, 107, 119, 120};
      
      setLEDs(red3, sizeof(red3)/sizeof(red3[0]), strip.Color(255, 0, 0));
      setLEDs(white3, sizeof(white3)/sizeof(white3[0]), strip.Color(255, 255, 255));
      setLEDs(blue3, sizeof(blue3)/sizeof(blue3[0]), strip.Color(0, 0, 255));
      setLEDs(special3, sizeof(special3)/sizeof(special3[0]), strip.Color(225, 225, 255));
      break;
    }
      
    case 4: {
      // 5
      int red4[] = {4};
      int white4[] = {5};
      int blue4[] = {36};
      int special4[] = {91, 92, 105, 106, 107, 119, 120};
      
      setLEDs(red4, sizeof(red4)/sizeof(red4[0]), strip.Color(255, 0, 0));
      setLEDs(white4, sizeof(white4)/sizeof(white4[0]), strip.Color(255, 255, 255));
      setLEDs(blue4, sizeof(blue4)/sizeof(blue4[0]), strip.Color(0, 0, 255));
      setLEDs(special4, sizeof(special4)/sizeof(special4[0]), strip.Color(225, 225, 255));
      break;
    }
      
    case 5: {
      // 6
      int red5[] = {21, 25, 40, 61, 66, 71, 88, 108, 157, 161, 168, 174, 176};
      int white5[] = {4, 8, 9, 10, 12, 17, 18, 23, 24, 27, 28, 36, 44, 45, 47, 50, 52, 56, 59, 60, 62, 65, 70, 87, 89, 94, 95, 98, 100, 112, 114, 117, 122, 128, 130, 137, 140, 143, 146, 147, 149, 152, 153, 160, 163, 164, 169, 171, 172, 173, 179, 187, 188, 1189, 191, 192, 193};
      int blue5[] = {3, 19 30, 34, 46, 49, 55, 68, 74, 86, 104, 125, 131, 138, 142, 148, 15, 186, 194};
      int special5[] = {91, 92, 105, 106, 107, 119, 120};
      
      setLEDs(red5, sizeof(red5)/sizeof(red5[0]), strip.Color(255, 0, 0));
      setLEDs(white5, sizeof(white5)/sizeof(white5[0]), strip.Color(255, 255, 255));
      setLEDs(blue5, sizeof(blue5)/sizeof(blue5[0]), strip.Color(0, 0, 255));
      setLEDs(special5, sizeof(special5)/sizeof(special5[0]), strip.Color(225, 225, 255));
      break;
    }
  }
  
  strip.show(); 
}
