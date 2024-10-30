let countdownDuration = 5 * 3600 + 23 * 60 + 42;

        function startCountdown() {
            const countdownElement = document.getElementById("countdown");

            function updateCountdown() {
                const hours = Math.floor(countdownDuration / 3600);
                const minutes = Math.floor((countdownDuration % 3600) / 60);
                const seconds = countdownDuration % 60;

                countdownElement.textContent = 
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

                if (countdownDuration > 0) {
                    countdownDuration--;
                } else {
                    clearInterval(countdownInterval);
                    countdownElement.textContent = "O EVENTO COMEÇOU!";
                }
            }

            const countdownInterval = setInterval(updateCountdown, 1000);
        }

        // Inicia o cronômetro
        startCountdown();