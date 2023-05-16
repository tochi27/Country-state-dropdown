const state = document.getElementById("list");

const myArr = ["Select your state here", "Abia","Adamawa", " Akwa Ibom", " Anambra", "Bauchi", " Bayelsa", " Benue ", " Borno", "Cross River ", " Delta", " Ebonyi ", " Edo",
                 "Ekiti", " Enugu", "Gombe", "Imo ", " Jigawa","Kaduna","Kano","Katsina","Kebbi"," Kogi","Kwara "," Lagos"," Nasarawa","Niger","Ogun","Ondo",
                 "Osun","Oyo"," Plateau"," Rivers","Sokoto","Taraba","Yobe","Zamfara"]

                 let states = "";
                 for (let i = 0; i < myArr.length; i++) {
                    states += "<option>" + myArr[i] + "</option>";
                    state.innerHTML = states;
                    
                 }

   const Countries = document.getElementById("countries");

   const Arr = ["Select your Country Here","Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Cape Verde"," Central African Republic","Chad","Comoros","Congo",
                " Côte d'Ivoire","Djibouti","Egypt","Equatorial Guinea","Eritrea"," Ethiopia","Gabon","Gambia","Gambia","Ghana","Guinea","Kenya","Lesotho","Liberia","Libya","Madagascar",
                " Malawi","Mali","Mauritania"," Mauritius","Mayotte","Morocco","Mozambique","Namibia","Nigeria","Niger","Rwanda","Senegal","Seychelles","Sierra Leone","Somalia",
            "South Africa ","Sudan"," Swaziland","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe"]

      let Count = "";
        
        for (let p = 0; p < Arr.length; p++) {
           Count += "<option>" + Arr[p] + "</option>";
           Countries.innerHTML = Count;
           
        }
