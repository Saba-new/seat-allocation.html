const seats = document.querySelectorAll('.seat');
const selectedSeatsList = document.getElementById('selected-seats-list');

let selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            const index = selectedSeats.findIndex(seat => seat.row === parseInt(seat.getAttribute('data-row')) && seat.seat === parseInt(seat.getAttribute('data-seat')));
            selectedSeats.splice(index, 1);
        } else {
            seat.classList.add('selected');
            selectedSeats.push({
                row: parseInt(seat.getAttribute('data-row')),
                seat: parseInt(seat.getAttribute('data-seat'))
            });
        }

        updateSelectedSeatsList();
    });
});

function updateSelectedSeatsList() {
    selectedSeatsList.innerHTML = '';
    selectedSeats.forEach(seat => {
        const li = document.createElement('li');
        li.textContent = `Row ${seat.row}, Seat ${seat.seat}`;
        selectedSeatsList.appendChild(li);
    });
}