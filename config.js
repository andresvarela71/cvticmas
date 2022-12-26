var texto = [];
texto[0] = "Juan de los Palotes";
texto[1] = "Odontólogo";
texto[2] = "Especialista en implantes dentarios";
texto[3] = "jdlp@gmail.com";
var ico = [3];
var icoc = [3];
var datos = [];
datos[0] = ["Datos personales","Nombre: Juan ","Apellido: de los Palotes", "Edad: 52 años","Nacionalidad: Polaco","","<br>", "", "", "", "", "", ""];
datos[1] = ["Experiencia laboral", "Empresa: Colgate Smile", "Ubicación: Berlín, Alemania", "Contacto: Nome Río", "Mail: nr@colgatesmile.com", "Período: Marzo 2001 - Junio 2022", "<br>", "Empresa: Parfum SRL", "Ubicación: Colonia, Alemania", "Contacto: Paco Tilla", "Mail: pacotilla@parfum.com", "Período: Febrero 1995 - Febrero 2001"  ];
datos[2] = ["Estudios", "Título: Doctor en Odontología", "Establecimiento: Poland University", "Año: 1990-1995", "<br>", "Especialización: Implantes dentarios", "Establecimiento: Banio Polaco", "Año: 1996-1997", "", "", "", ""];
datos[3] = ["Datos de contacto", "Teléfono: 555-5555", "Mail: jdlp@gmail.com", "Dirección: Carabobo 123, Lomas de Zamora, Alemania", "", "", "", "", "", "", "", ""];
var cliq = false;


function escuchar() {
    for (let x = 0; x < 4; x++) {
        ico[x] = document.getElementById("icono" + x);
        ico[x].addEventListener("mouseover", function() {
            cliq = false;
            document.getElementById("texto").innerHTML = texto[x];
            for (let z=0; z < 4; z++) {
                document.getElementById("icono" + z).style.color = "gray";
                document.getElementById("icono" + z).style.fontSize = "4em";
                document.getElementById("icono" + x).style.color = "green";
                document.getElementById("icono" + x).style.fontSize = "6em";
            }
            for (let q = 0; q < 12; q++) {
                document.getElementById("cont" + q).innerHTML = ""; 
                
            }
        }
        )
        
     

        ico[x] = document.getElementById("icono" + x);
        ico[x].addEventListener("mouseout", function() {
            if (cliq == false) {
            document.getElementById("texto").innerHTML = "";
            for (let z=0; z < 4; z++) {
                document.getElementById("icono" + z).style.color = "gray";
                document.getElementById("icono" + z).style.fontSize = "4em";
            }
            
            for (let y = 0; y < 12; y++) {
                document.getElementById("cont" + y).innerHTML = ""; 
                }
            }
        }   
        )
    
  
        icoc[x] = document.getElementById("icono" + x);
        icoc[x].addEventListener("click", function() {
            cliq = true;
            document.getElementById("texto").innerHTML = "";
            document.getElementById("icono" + x).style.color = "blue";
            document.getElementById("icono" + x).style.fontSize = "5em";
            for (let y = 0; y < 12; y++) {
            document.getElementById("cont" + y).innerHTML = datos[x][y]; 
            }
       
        }
        )
    }
     

       
    
}


    

