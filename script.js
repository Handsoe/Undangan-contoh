document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    const responseMessage = `Terima kasih, ${name}. Kehadiran Anda: ${attendance === 'yes' ? 'Ya' : 'Tidak'}.`;

    document.getElementById('rsvpResponse').innerText = responseMessage;
});

