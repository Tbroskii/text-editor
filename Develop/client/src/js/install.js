const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {event.preventDefault();
    deferredPrompt = event;
    showInstallButton();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {  // Ensure the deferredPrompt is available
    if (deferredPrompt) {
      // Show the installation prompt
      deferredPrompt.prompt();
  
      // Wait for the user to respond to the prompt
      const choiceResult = await deferredPrompt.userChoice;
  
      // Check if the user accepted the prompt
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
  
      // Reset the deferredPrompt variable as the prompt can only be shown once
      deferredPrompt = null;
    }});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});


// Implement a function to show the install button
function showInstallButton() {
    // Show the install button or any UI element to prompt installation
    const installButton = document.getElementById('butInstall');
    installButton.style.display = 'block';
  }