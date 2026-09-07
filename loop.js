let fields = [name, email, password];

for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "") {
        alert("Please fill all fields");
        break;
    }
}