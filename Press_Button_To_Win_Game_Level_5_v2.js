document.addEventListener('DOMContentLoaded', function() {
    let password = 'ECHO';
    let stopExecution = false;

    document.getElementById('checkButton').addEventListener('click', function() {
        if (!stopExecution) {
            const inputValue = document.getElementById('valueInput').value;
            checkPassword(inputValue);
        }
    });

    function checkPassword(inputValue) {
        if (inputValue === password) {
            stopExecution = true;
            document.getElementById('dText2').textContent = "CONGRATULATIONS. YOU WON!!!";
            document.getElementById('dText2').style.backgroundColor = "cyan";
        } else {
            document.getElementById('dText2').innerText = 'Incorrect Password. Try again!';
            document.getElementById('dText2').style.backgroundColor = "RED";
            document.getElementById('dText2').color = "white"; 
        }
    }
});
function resetPage() {
    location.reload();
}