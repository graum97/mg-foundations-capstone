//grab fiction suggestion
const fictionButton = document.getElementsByClassName("suggestFicButton")
//grab literature suggestion
const literatureButton = document.getElementsByClassName("suggestLitButton")
//grab nonfiction suggestion
const nonfictionButton = document.getElementsByClassName("suggestNonButton")
//grab quick-read challenge
const quickReadButton = document.getElementById('quickChallenge');
//grab ive-got-time challenge
const iveGotTimeButton = document.getElementById("longChallenge");

const baseURL = `http://localhost:6006/api/suggestions`

const getQuickRead = () => {
    axios.get("http://localhost:6006/quick-read")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getGotTime = () => {
    axios.get("http://localhost:6006/got-time")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

// alert("test")

//activate quickRead button
quickReadButton.addEventListener('click', getQuickRead);
//activate iveGotTime button
iveGotTimeButton.addEventListener('click', getGotTime);