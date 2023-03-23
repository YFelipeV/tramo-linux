
import Swal from "sweetalert2";


import axios from "axios";

export const handleSubmit = async ({ correoAdmin, passwordAdmin },navigate) => {
 
  try {
    const response = await axios.post(
      "http://localhost:4000/auth",
      { correoAdmin, passwordAdmin }
    );
    console.log(response);

    if (response.status === 200 && response.data) {
      Swal.fire({
        title: response.data.message,
        icon: "success",
        timer: 1500,
      }).then(() => {
        // Almacenar el token en una variable o estado
        const authToken = response.data.token;
        localStorage.setItem("token", authToken);

        console.log(authToken);
        // Llamar la función para obtener los datos protegidos usando el token como argumento
        
        // Redireccionar a la ruta
        navigate("/dashboard");
      });
    }
  } catch (error) {
    if (error.response.status === 400) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
    }
  }
};

{
  /* CONDUCTORES  DISPONIBLE*/
}
export const getConductoresDisponibles = async () => {
  const response = await fetch(
    "http://localhost:4000/conductoresDis",

    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();

  return data;
};

{
  /* CONDUCTORES  SERVICIO*/
}

export const getConductoresServicio = async () => {
  const response = await fetch(
    "http://localhost:4000/conductoresEnServicio",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();

  return data;
};
{
  /* SOLICITUDES */
}

{
  /* SOLICITUDES PENDIENTES */
}

export const getSolicitudesPendientes = async () => {
  const response = await fetch(
    "http://localhost:4000/solicitudesPendiente",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

export const getSolicitudesPendientesid = async (id) => {
  const response = await fetch(
    `http://localhost:4000/solicitudesPendiente/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

{
  /* SOLICITUDES  ACTUALIZAR */
}

export const updateSolicitudesPendientes = async (id) => {
  const user = {
    idConductor: id,
  };
  const url = `http://localhost:4000/aceptarSoli/${user.idConductor}`;
  const data = { idConductor: user.idConductor };

  await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};

{
  /* SOLICITUDES  ACTUALIZAR RECHAZAR */
}
export const putSolicitudesRechazar = (user) => {
  const url = `http://localhost:4000/rechazarSolicitud/${user.idConductor}`;
  const data2 = { motivoRechazoCON: user.motivoRechazoCON };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* SOLICITUDES  RECHAZADAS */
}

export const getSolicitudesRechazadas = async () => {
  const response = await fetch(
    "http://localhost:4000/solicitudesRechazadas",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

{
  /* SOLICITUDES  RECHAZADAS ID */
}
export const getSolicitudesRechazadasid = async (id) => {
  const response = await fetch(
    `http://localhost:4000/solicitudesRechazadas/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CONDUCTOR */
}

{
  /* DATOS CONDUCTOR HABILITADOS */
}

export const getDatosConductorHabilitados = async () => {
  const response = await fetch(
    "http://localhost:4000/datosConductoresHabilitados",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CONDUCTOR HABILITADOS ID */
}
export const getDatosConductorHabilitadosId = async (id) => {
  const response = await fetch(
    `http://localhost:4000/datosConductoresHabilitados/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CONDUCTOR INHABILITAR */
}

{
  /* DATOS CONDUCTOR INHABILITADOS */
}
export const getDatosConductoresInhabilitados = async () => {
  const response = await fetch(
    "http://localhost:4000/datosConductoresInhabilitados",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};
{
  /* DATOS CONDUCTOR INHABILITAR */
}
export const putInhabilitarDatosConductor = (user) => {
  const url = `http://localhost:4000/datosInhabilitarConductor/${user.idConductor}`;
  const data2 = { motivoInhabilitadoCON: user.motivoInhabilitadoCON };
  console.log(data2);

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* DATOS CONDUCTOR HABILITAR */
}

export const putHabilitarDatosConductor = (id) => {
  const url = `http://localhost:4000/datosHabilitarConductor/${id}`;
  const data2 = { idConductor: id };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* DATOS CONDUCTOR INHABILITADOS ID */
}

export const getDatosConductoresInhabilitadosId = async (id) => {
  const response = await fetch(
    `http://localhost:4000/datosConductoresInhabilitados/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CLINTE HABILITADOS */
}

export const getDatosClientesHabilitadosNatural = async () => {
  const response = await fetch(
    "http://localhost:4000/datosClientesNaturalHB ",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};
{
  /* DATOS CLINTE UPDATE  CLIENTE NATURAL */
}

export const putinhabilitarDatosClienteNatural = (user) => {
  const url = `http://localhost:4000/datosClientesNaturalHB/${user.idPerNatural}`;
  const data2 = { motivoInhabilitadoPNA: user.motivoInhabilitadoPNA };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* DATOS CLINTE INHABILITADOS */
}

export const getDatosClientesInhabilitadosNatural = async () => {
  const response = await fetch(
    " http://localhost:4000/datosClientesNaturalIN ",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

export const puthabilitarDatosClienteNatural = (idPerNatural) => {
  const url = `http://localhost:4000/datosClientesNaturalIN/${idPerNatural}`;
  const data2 = { idPerNatural: idPerNatural };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data2),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data2) => {
      console.log(data2);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* DATOS CLINTE NATURAL ID */
}
export const getDatosClienteNaturalInhabilitadoId = async (id) => {
  const response = await fetch(
    `http://localhost:4000/datosClientesNaturalIN/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

{
  /* DATOS CLINTE EMPRESA HABILITADOS */
}

// export const getDatosClientesHabilitadosEmpresa = async () => {
//   const response = await fetch(
//     "http://localhost:4000/datosClientesEmpresaHB "
//   );
//   const data = response.json();
//   return data;
// };

export const getDatosClientesHabilitadosEmpresa = async () => {
  // const token = localStorage.getItem("token");
  const response = await fetch(
    "http://localhost:4000/datosClientesEmpresaHB ",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
{
  /* DATOS CLINTE EMPRESA INHABILITAR */
}

export const putInabilitarDatosClienteEmpresa = ({
  idPerJuridica,
  motivoInhabilitadoPJU,
}) => {
  const url = `http://localhost:4000/datosClientesEmpresaHB/${idPerJuridica}`;
  const data = { motivoInhabilitadoPJU: motivoInhabilitadoPJU };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

{
  /* DATOS CLINTE EMPRESA INHABILITADO */
}
export const getDatosClientesinhabilitadoEmpresa = async () => {
  const Auth = localStorage.getItem("token");
  // const token = localStorage.getItem("token");
  const response = await fetch(
    "http://localhost:4000/datosClientesEmpresaIN ",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

export const putHabilitarDatosClienteEmpresa = (idPerJuridica) => {
  const url = `http://localhost:4000/datosClientesEmpresaIN/${idPerJuridica}`;
  const data = { idPerJuridica: idPerJuridica };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),

    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDatosClientesinhabilitadoEmpresaId = async (id) => {
  const response = await fetch(
    `http://localhost:4000/datosClientesEmpresaIN/${id} `,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const data = response.json();
  return data;
};

{
  /* HISTORIAL */
}

export const getHistorial = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = response.json();
  return data;
};

{
  /*PQRS*/
}

export const getPqrs = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = response.json();
  return data;
};

export const validarAdmin = async () => {
  const response = await fetch(
    "http://localhost:4000Princi"
  );
  const data = response.json();

  return data;
};

export const Loguot = async () => {
  const response = await fetch(
    "http://localhost:4000/logout"
  );
  const data = response.json();
  localStorage.removeItem("token");
  return data;
};
