document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los datos del usuario
    const userName = document.getElementById("name").value;
    const userSurname = document.getElementById("surname").value;
    const birthDay = parseInt(document.getElementById("birth-day").value);
    const birthMonth = parseInt(document.getElementById("birth-month").value) - 1; // Meses en JavaScript van de 0 a 11
    const birthYear = parseInt(document.getElementById("birth-year").value);

    // Crear la fecha de nacimiento a partir de los valores ingresados
    const birthdate = new Date(birthYear, birthMonth, birthDay);
    const today = new Date();

    // Cálculo de la edad
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    const dayDifference = today.getDate() - birthdate.getDate();
    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--; // Ajusta la edad si el cumpleaños aún no ha pasado este año
    }

    // Cálculo de días vividos
    const timeDifference = today - birthdate;
    const daysLived = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Muestra el mensaje con días vividos y edad
    document.getElementById("welcome-message").innerText = `¡Bienvenido a nuestra página!`;
    document.getElementById("days-lived").innerText = `${userName} ${userSurname}, has vivido aproximadamente ${daysLived} días y tienes ${age} años.`;
});
