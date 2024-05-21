document.addEventListener('DOMContentLoaded', () => {
    const stats = ['strength', 'intelligence', 'charisma', 'luck', 'willpower', 'agility', 'speed'];
    const statValues = {
        strength: 8,
        intelligence: 7,
        charisma: 6,
        luck: 5,
        willpower: 6,
        agility: 7,
        speed: 9
    };

    stats.forEach(stat => {
        const decreaseBtn = document.querySelector(`.decrease[data-stat=${stat}]`);
        const increaseBtn = document.querySelector(`.increase[data-stat=${stat}]`);
        const statBar = document.getElementById(`${stat}-bar`);
        
        decreaseBtn.addEventListener('click', () => {
            if (statValues[stat] > 1) {
                statValues[stat]--;
                updateStatBar(statBar, statValues[stat]);
                updateButtons(decreaseBtn, increaseBtn, statValues[stat]);
            }
        });

        increaseBtn.addEventListener('click', () => {
            if (statValues[stat] < 10) {
                statValues[stat]++;
                updateStatBar(statBar, statValues[stat]);
                updateButtons(decreaseBtn, increaseBtn, statValues[stat]);
            }
        });

        updateStatBar(statBar, statValues[stat]);
        updateButtons(decreaseBtn, increaseBtn, statValues[stat]);
    });

    function updateStatBar(statBar, value) {
        statBar.style.width = `${value * 10}%`;
    }

    function updateButtons(decreaseBtn, increaseBtn, value) {
        decreaseBtn.disabled = value <= 1;
        increaseBtn.disabled = value >= 10;
    }

    document.getElementById('characterName').addEventListener('input', function() {
        const characterName = this.value;
        document.title = characterName ? `${characterName}'s Stats` : 'Character Stats';
    });

    document.getElementById('imageUpload').addEventListener('change', function() {
        const file = this.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('characterImage').src = e.target.result;
        }
        reader.readAsDataURL(file);
    });
});
