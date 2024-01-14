const video = document.getElementById("video")
const button = document.getElementById("button")
const buttonContainer = document.getElementById("button-container")

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        video.srcObject = mediaStream
        video.onloadedmetadata = () => {
            video.hidden = false
            video.play()
        }
        buttonContainer.hidden = true
    } catch (error) {
        if (error.name === 'NotAllowedError') {
            return
        } else {
            console.error('Error accessing screen sharing:', error);
        }
    }
}

button.addEventListener('click', async () => {
    selectMediaStream()
})