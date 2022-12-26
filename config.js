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
var cliq = [false, false, false, false];
var tamanioicono, modif;




function escuchar() {
    tamanioicono = getComputedStyle(document.documentElement).getPropertyValue("--iconosize");

    for (let x = 0; x < 4; x++) {
        ico[x] = document.getElementById("icono" + x);
        ico[x].addEventListener("mouseover", function() {
           
            document.getElementById("texto").innerHTML = texto[x];

            for (let t = 0; t < 4; t++) {
            if (cliq[t] == true) {console.log(t);
                cliq[t] == false;
                document.getElementById("icono" + t).style.color = null;
                document.getElementById("icono" + t).style.fontSize = null;
                }
            }
            for (let q = 0; q < 12; q++) {
                document.getElementById("cont" + q).innerHTML = ""; 
                
            }
           
        }
        )
        
     

        ico[x] = document.getElementById("icono" + x);
        ico[x].addEventListener("mouseout", function() {
            document.getElementById("texto").innerHTML = "";
                    
        }   
        )
    
  
        icoc[x] = document.getElementById("icono" + x);
        icoc[x].addEventListener("click", function() {
           
            document.getElementById("texto").innerHTML = "";
            document.getElementById("icono" + x).style.color = "blue";
            modif = tamanioicono * 1.5 + "em"
            document.getElementById("icono" + x).style.fontSize = modif; 
            
            cliq[x] = true;
           
            for (let y = 0; y < 12; y++) {
            document.getElementById("cont" + y).innerHTML = datos[x][y]; 
            }
       
        }
        )
    }
     

       
    
}


    

