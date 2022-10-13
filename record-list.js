const setEditModal = (id) => {
  // to be implemented
}

const deleteRecord = (id) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", `http://localhost:3000/record/${id}`, false);
  xhttp.send();

  location.reload();
}



const loadRecords = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/records", false);
  xhttp.send();

  const records = JSON.parse(xhttp.responseText);

  for (let record of records) {
    const item = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${record.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${record.year}</h6>

                        <div>Artist: ${record.artist}</div>

                        <hr>

                        <button type="button" class="btn btn-danger" onclick="deleteRecord(${record.id})">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editRecordModal" onClick="setEditModal(${record.id})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('records').innerHTML = document.getElementById('records').innerHTML + item;
  }

}

loadRecords();
