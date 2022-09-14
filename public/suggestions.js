//grab fiction suggestion
const fictionButton = document.getElementById("suggestFicButton")
//grab literature suggestion
const literatureButton = document.getElementById("suggestLitButton")
//grab nonfiction suggestion
const nonfictionButton = document.getElementById("suggestNonButton")
//grab quick-read challenge
const quickReadButton = document.getElementById('quickChallenge');
//grab ive-got-time challenge
const iveGotTimeButton = document.getElementById("longChallenge");

const baseURL = `http://localhost:6006/api/suggestions`

const getQuickRead = () => {
    axios.get("http://localhost:6006/api/quick-read")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getGotTime = () => {
    axios.get("http://localhost:6006/api/got-time")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getLiterature = () => {
    axios.get("http://localhost:6006/api/literature")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFiction = () => {
    axios.get("http://localhost:6006/api/fiction")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getNonfiction = () => {
    axios.get("http://localhost:6006/api/nonfiction")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

quickReadButton.addEventListener('click', getQuickRead);

iveGotTimeButton.addEventListener('click', getGotTime);

literatureButton.addEventListener('click', getLiterature);

fictionButton.addEventListener('click', getFiction);

nonfictionButton.addEventListener('click', getNonfiction);