function saludar(nombre) {
    console.log('Hola ' + nombre);
}
var persona = {
    nombre: 'Fernando',
    edad: 31,
    sexo: 'M',
    direccion: {}
};
// var persona = 'Fernando';
saludar(persona.nombre);
