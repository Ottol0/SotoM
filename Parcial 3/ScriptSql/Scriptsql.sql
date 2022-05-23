
CREATE DATAbase l19100799;

use l19100799

create table registro(
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

select *
FROM registro