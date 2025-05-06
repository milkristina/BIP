document.addEventListener('DOMContentLoaded', function() {
    const player2Btn = document.getElementById('player-2-btn');
    const player3Btn = document.getElementById('player-3-btn');
    const player4Btn = document.getElementById('player-4-btn');
    const player5Btn = document.getElementById('player-5-btn');
    const player6Btn = document.getElementById('player-6-btn');
    
    
    let isConnected = false;
    const wifiStatus = document.getElementById('wifi-status');
    
    
    async function connectToWiFi() {
      try {
        
        wifiStatus.textContent = "Connecting...";
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        isConnected = true;
        wifiStatus.textContent = "Connected";
        wifiStatus.style.color = "green";
        
        console.log("Successfully connected to WiFi module");
      } catch (error) {
        isConnected = false;
        wifiStatus.textContent = "Disconnected";
        wifiStatus.style.color = "red";
        console.error("WiFi connection error:", error);
      }
    }
    
    
    async function sendCommandToArduino(playerCount) {
      if (!isConnected) {
        alert("Not connected to WiFi module. Please connect first.");
        return;
      }
      
      try {
        console.log(`Sending command for ${playerCount} players to Arduino`);
        
        const response = await fetch('http://your-esp-ip-address/command', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            players: playerCount,
            command: 'set_led_pattern'
          })
        });
        
        if (response.ok) {
          console.log(`Successfully set ${playerCount} player mode`);
          highlightSelectedButton(playerCount);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error sending command:', error);
        alert("Failed to send command to Arduino");
      }
    }
    
    
    function highlightSelectedButton(playerCount) {
      
      [player2Btn, player3Btn, player4Btn, player5Btn, player6Btn].forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      });
      
      
      const selectedBtn = document.getElementById(`player-${playerCount}-btn`);
      if (selectedBtn) {
        selectedBtn.style.backgroundColor = "#4CAF50";
        selectedBtn.style.color = "white";
      }
    }
    
    
    player2Btn?.addEventListener('click', () => sendCommandToArduino(2));
    player3Btn?.addEventListener('click', () => sendCommandToArduino(3));
    player4Btn?.addEventListener('click', () => sendCommandToArduino(4));
    player5Btn?.addEventListener('click', () => sendCommandToArduino(5));
    player6Btn?.addEventListener('click', () => sendCommandToArduino(6));
    
    
    connectToWiFi();
  });