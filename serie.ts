export class Serie {
    codigo: number;
    nombre: String;
    canal: String;
    temporadas:number;
    descripcion: String;
    link: String;
    imagen: String;
    constructor(codigo: number,nombre: String, canal:String,  temporadas: number, descripcion: String, link: String, imagen: String) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.canal = canal;
      this.temporadas = temporadas;
      this.descripcion = descripcion;
      this.link = link;
      this.imagen = imagen;
    }
  }