
CREATE DATAbase l19100799;

use l19100799

create table registro(
    IdRegistro int IDENTITY(1,1),
    Nombre VARCHAR(100),
    Autor varchar(20),
    Edicion varchar(15),
    Editorial varchar(15),
    Genero VARCHAR(15),
    Fecha DATE,
    Descripcion VARCHAR(300)
);

insert into registro( Nombre, Autor, Edicion, Editorial, Genero, Fecha, Descripcion)
VALUES ('Primera persona del singular', 'Haruki Murakami', 'Original','TUSQUETS','Romance','2021-10-12','Cuentos cortos');

insert into registro( Nombre, Autor, Edicion, Editorial, Genero, Fecha, Descripcion)
VALUES ('Ante el dolor de los demas', 'Susan Sontag', 'Original','ePub','Drama','2012-05-17','Ya no podemos ser inocentes, somos testigos');

insert into registro( Nombre, Autor, Edicion, Editorial, Genero, Fecha, Descripcion)
VALUES ('Adios a Las Armas', 'Ernest Hemingway', 'Original','SouleSpagnuolo','Drama','1982-03-10','Aquel año, al final del verano,viviamos en una casa de un pueblo mas alla del rio');

select *
FROM registro

