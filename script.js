const Api_key = "8b718b4d2935b7625fe3a17cf8ced283"; // Replace with your actual API key

        function getPopulation() {
            const city = document.getElementById('cityInput').value;
            const populationDetail = document.getElementById('populationDetails');
            if (city === '') {
                populationDetail.innerHTML = "Please enter a city name";
                return;
            }
            const populationUrl = `https://countriesnow.space/api/v0.1/countries/population/cities`;
            fetch(populationUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    city: city
                })
            })
                .then(response => response.json())
                .then(populationData => {
                    console.log(populationData)
                    if (populationData.data != '404') {
                        const populationDetails = `
                        <h2>${city} ${populationData.data.country}</h2>

                        <p>Population: ${populationData.data.populationCounts[0].value}</p>`;
                        populationDetail.innerHTML = populationDetails;
                    } else {
                        populationDetail.innerHTML = '<p>No population data available for this city.</p>';
                    }
                })
                .catch(error => {
                    populationDetail.innerHTML = '<p>Error fetching population data. Please try again.</p>';
                });
        }