let students = JSON.parse(localStorage.getItem("students")) || [];
 let editId = null;
 const f = document.getElementById("studentForm");
 const tbody = document.getElementById("tbody");
 const search = document.getElementById("search");
 const sort = document.getElementById("sort");
 function save() { localstorage.setItem("students", JSON.stringify (students)) }
 function render(list = students) {
tbody.innerHTML = "";
list.forEach( s => {
    tbody.innerHTML += `<tr><td>${s.name}</td><td>${s.course}</td>
    <td><button class="action onclick="edit(${s.id})">Edit</button>
    <button class="action" onclick="del(${s.id})"Delete</button></td></tr>`;
    });
    document.getElementById("count").textContent = list.length;

}
      onsubmit = e => {
    e.preventDefault();
    const name = nameEl.value.trim(), age =+ageEl.value, course= courseEl.value.trim();
    if(!name || !course || age <1) return alert("Enter valid data");
    if(editId){
        let s = students.find(x => x.id == editId);
        Object.assign(s, {name, age, course });
        editId = null;
    }
    else {
        students.push({ id: Date.now(), name, age, course });
    }
    save(); render(); f.reset();

};
const nameEl = document.getElementById("name");
const ageEl = document.getElementById("age");
const courseEl = document.getElementById("course");
function edit(id){
    let s = students.find(x => x.id == id);
    nameEl.value = s.name; ageEl.value= s.age; courseEl.value = s.course; editId = id;
}
function del(id){
    if (confirm("Delete student?")){
        students = students.filter(x => x.id !== id); save(); render();
    }

}
search.oninput = () => {
    const q = search.value.toLowercase();
    render(students.filter(s => s.name.toLowercase().includes(q) || s.course.toLowercase().includes(q)));
};
sort.onchange = () => {
    let arr = [...students];
    if(sort.value == "az") arr.sort((a, b) => a.name.localCompare(b.name));
    if(sort.value == "za") arr.sort((a, b) => a.name.localCompare(b.name));
    if(sort.value == "age") arr.sort((a, b) => a.age - b.age);
    render(arr);
};
render();

