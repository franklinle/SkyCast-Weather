class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 25rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title"><center>${data.name}</center></h5>
                <h6 class="card-subtitle mb-2 text-muted"><center>Highs of ${Math.round((data.main.temp_max -273.15)*(9/5)+32)}°F / Lows of ${Math.round((data.main.temp_min-273.15)*(9/5)+32)}°F</center></h6>
                <p class="card-text "><center>Weather conditions: ${data.weather[0].description}</center></p>
                
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
