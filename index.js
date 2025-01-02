const url = "https://api.alquran.cloud/v1/surah";

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    const table = document.getElementById("myTable");

    data.data.forEach((surah) => {
        const row = table.insertRow();

        const nameCell = row.insertCell(0); 
        const englishNameCell = row.insertCell(1); 

        nameCell.textContent = surah.name; 
        englishNameCell.textContent = surah.englishName; 
    });
})
.catch((error) => {
    console.error("Error fetching the data:", error);
});


function myFunction() {
    let input, filter, table, tr, i, nameCell, englishNameCell, txtValueName, txtValueEnglishName;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) { 
        nameCell = tr[i].getElementsByTagName("td")[0];
        englishNameCell = tr[i].getElementsByTagName("td")[1];

        if (nameCell || englishNameCell) {
            txtValueName = nameCell.textContent || nameCell.innerText;
            txtValueEnglishName = englishNameCell.textContent || englishNameCell.innerText;

            if (
                txtValueName.toUpperCase().indexOf(filter) > -1 ||
                txtValueEnglishName.toUpperCase().indexOf(filter) > -1
            ) {
                tr[i].style.display = ""; 
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}