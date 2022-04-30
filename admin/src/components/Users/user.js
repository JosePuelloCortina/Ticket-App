import React, { useEffect } from "react";
import NavBar from "../NavBar/navbar";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteElement } from "./../../redux/actions";
import { makeAdmin } from "../../redux/actions";

export default function Usuarios() {
  const dispatch = useDispatch();

  const elementos = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  function handleDelete(e, id) {
    e.preventDefault();
    dispatch(deleteElement("user", id));
  }

  function handleMakeAdmin(e, nombre, apellido, email, password) {
    e.preventDefault();
    const user = {
      nombre,
      apellido,
      email,
      password,
    };
    dispatch(makeAdmin(user));
  }

  return (
    <div>
      <NavBar />
      {elementos?.map((el) => {
        return (
          <div>
            <h1>{el.nombre}</h1>
            <Link to={`/user/${el.id}`}>
              <button>Editar</button>
            </Link>
            <button onClick={(e) => handleDelete(e, el.id)}>Eliminar</button>
            <button
              onClick={(e) =>
                handleMakeAdmin(
                  e,
                  el.nombre,
                  el.apellido,
                  el.email,
                  el.password
                )
              }
            >
              Hacer admin
            </button>
          </div>
        );
      })}
    </div>
  );
}
