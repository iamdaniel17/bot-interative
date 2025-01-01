function changeText() {
    const output = document.getElementById('output');
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#f39c12', '#8e44ad'];
    const messages = [
        'You clicked the button!',
        'Great job!',
        'Keep going!',
        'You are amazing!',
        'Have a fantastic day!'
       
    ];

    // Randomly pick a message and color
    const randomIndex = Math.floor(Math.random() * messages.length);
    output.textContent = messages[randomIndex];
    output.style.color = colors[randomIndex];
}
