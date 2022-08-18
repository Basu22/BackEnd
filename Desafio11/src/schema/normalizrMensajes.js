//normalizr
import { schema, normalize } from "normalizr";
const author = new schema.Entity("author");
const mensaje = new schema.Entity(
    "mensaje",
    { author: author },
    { idAttribute: "_id" }
);
const schemaMensajes = new schema.Entity("mensajes", { mensajes: [mensaje] });

export default schemaMensajes 