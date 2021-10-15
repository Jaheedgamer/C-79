var names_of_students = [];

function submit(){
    var name_1 = document.getElementById("student_1").value;
    var name_2 = document.getElementById("student_2").value;
    var name_3 = document.getElementById("student_3").value;
    var name_4 = document.getElementById("student_4").value;
    
    names_of_students.push(name_1);
    names_of_students.push(name_2);
    names_of_students.push(name_3);
    names_of_students.push(name_4);
    
    console.log(names_of_students);
    document.getElementById("display_name").innerHTML=names_of_students;
    document.getElementById("submit").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
}


function sorting(){
    names_of_students.sort();

document.getElementById("display_name").innerHTML=names_of_students;
}

