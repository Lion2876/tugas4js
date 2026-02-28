function toggleLamp(id) {
    const lamp = document.getElementById(id);

    if (lamp.src.includes("lampoff.png")) {
        lamp.src = "lampon.png";
    } else {
        lamp.src = "lampoff.png";
    }

    updateStatus();
}

function toggleAll(ids) {
    ids.forEach(id => toggleLamp(id));
}

function toggleGroup(ids) {
    ids.forEach(id => toggleLamp(id));
}

function turnOnAll(ids) {
    ids.forEach(id => {
        document.getElementById(id).src = "lampon.png";
    });

    updateStatus();
}

function turnOffAll(ids) {
    ids.forEach(id => {
        document.getElementById(id).src = "lampoff.png";
    });

    updateStatus();
}

function updateStatus() {
    checkAllOn(['r1-lamp1','r1-lamp2','r1-lamp3'], 'on1');
    checkAllOn(['a','b','c','d'], 'on2');
}

function checkAllOn(ids, onId) {
    let allOn = true;

    ids.forEach(id => {
        const lamp = document.getElementById(id);
        if (lamp.src.includes("lampoff.png")) {
            allOn = false;
        }
    });

    const onImg = document.getElementById(onId);

    if (allOn) {
        onImg.style.display = "block";
    } else {
        onImg.style.display = "none";
    }
}