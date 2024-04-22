// Fetch YAML data and generate HTML content for homes for sale
fetch('homes.yaml')
    .then(response => response.text())
    .then(yamlData => {
        const data = jsyaml.load(yamlData);

        const homesForSale = document.getElementById('homesForSale');
        data.homesForSale.forEach(home => {
            homesForSale.innerHTML += `
                <div class="listing">
                    <img src="${home.image}" alt="Mobile Home Image">
                    <div class="listing-info">
                        <h3>${home.address}</h3>
                        <span>${home.price}</span>
                    </div>
                    <p>Description: ${home.description}</p>
                </div>
            `;
        });

        const homesForRent = document.getElementById('homesForRent');
        data.homesForRent.forEach(home => {
            homesForRent.innerHTML += `
                <div class="listing">
                    <img src="${home.image}" alt="Mobile Home Image">
                    <div class="listing-info">
                        <h3>${home.address}</h3>
                        <span>${home.price}</span>
                    </div>
                    <p>Description: ${home.description}</p>
                </div>
            `;
        });
    })
    .catch(error => console.log(error));
