import { useConductores } from "../../Context/Context";

import ModalDatosClienteInhabilitado from "../Modales/ModalDatosClienteInhabilitado";
import {Navigate} from 'react-router-dom'
function DatosClienteHabilitadosCards() {
  const { DatosClienteHabilitados,idPersonal } = useConductores();


  return (
    
    <>
      {
      DatosClienteHabilitados.login ===false ? 
      (
       <Navigate to={"/pagina404"}/>
      ):
      ( 
    
      
      DatosClienteHabilitados.map(
        ({
          idPerNatural,
          nombrePNA,
          apellidoPNA,
          nroTelefonoPNA,
          correoElectronicoPNA,
          DireccionPNA,
          calificacionPNA,
          fotoPerfilPNA
          
        }) => (
          <tr key={idPerNatural}>
            <td>
              <p className="font-weight-bold text-xs font-weight-bold m-0 text-danger text-center">
                <b>Cliente Natural</b>
              </p>

              <div className="d-flex justify-content-center">
                <img
                  src={fotoPerfilPNA}
                  alt="Profile"
                  className="rounded-circle "
                  style={{maxWidth:"100px"}}
                />
              </div>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Nombre</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nombrePNA} {apellidoPNA}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>N° Telefono</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {nroTelefonoPNA}
              </p>
            </td>
            <td className="text-center align-middle text-sm">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Correo</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {correoElectronicoPNA}
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Direccion</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                {DireccionPNA}
              </p>
            </td>
            <td className="text-center align-middle">
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                <b>Calificacion {calificacionPNA}</b>
              </p>
              <p className="font-weight-bold text-xs font-weight-bold m-0">
                ⭐⭐⭐⭐⭐
              </p>
            </td>
            <td>
              <div className="text-center">
                <div className="mt-5">
                  <button 
                  onClick={()=>idPersonal(idPerNatural)}
                    className="btn btn-secondary mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#escribir-motivo-inhabilitacion"
                  >
                    Inhabilitar
                  </button>
                </div>
              </div>
            </td>
          </tr>
        )
      ))}
      <ModalDatosClienteInhabilitado />
    </>
  );
}

export default DatosClienteHabilitadosCards;
