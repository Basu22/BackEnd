#MOSTRAR TODAS LAS BASES
show databases;

#CREAR BASE DE DATO
create database picate_esta;

#USAR BASE DE DATO
use picate_esta;

#CREAR TABLA
CREATE TABLE picada (
						id int not null auto_increment primary key, 
                        nombre varchar(50) not null, 
                        apellido varchar(50) not null, 
                        edad int,
                        email varchar(50) not null
);

#PARA SELECCIONAR TODA LA TABLA
select * from picada;

#PARA INSERTAR DATOS DENTRO DE LA TABLA
insert into picada (nombre,apellido,edad,email) value ("Juan","Perez",23,"jp@gmail.com");
insert into picada (nombre,apellido,edad,email) value ("Pedro","Mei",21,"pm@gmail.com");
insert into picada (nombre,apellido,edad,email) value ("Juana","Suarez",25,"js@gmail.com");

#BORRAR DATOS
delete from picada where id=2;

#ACTUALIZAR DATOS
update picada set edad = 24 where id=1;