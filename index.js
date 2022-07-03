let Tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    saludar: function()
    {return('hola soy ' + this.nombre )},
    cargar(nombre, apellido){
        //funciones constructoras:
        this.nombre = nombre;
        this.apellido = apellido
        console.log(this.nombre, this.apellido)
    }
}


let miTenista = new Tenista ('florencia',' merzario')
console.log(miTenista)