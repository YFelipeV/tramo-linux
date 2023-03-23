import { useState } from "react";
import { putInhabilitarDatosConductor } from "../../api/api";
import { useConductores } from "../../Context/Context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ModalDatosConductor() {
  const navigate = useNavigate();
  const { DatosConductorHabilitadoId } = useConductores();

  const [info, setInfo] = useState({});

  const user = {
    motivoInhabilitadoCON: info,
    idConductor: DatosConductorHabilitadoId.idConductor,
  };

  return (
    <tr>
      <td>
        <div
          className="modal fade"
          id="escribir-motivo-inhabilitacion"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Escriba el motivo de la Inhabilitacion
                </h1>
                <button
                  onClick={() => {
                    navigate("/dashboard/datosconductores");
                  }}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <textarea
                    className="w-100"
                    name="respuesta-pqrs"
                    id="respuesta-pqrs"
                    rows="10"
                    onChange={(e) => setInfo(e.target.value)}
                  ></textarea>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  onClick={() => {
                    Swal.fire({
                      title: "¿Seguro que desea Inhabilitar el conductor?",
                      icon: "question",
                      showDenyButton: true,
                      denyButtonText: "No",
                      confirmButtonText: "Si",
                    }).then((response) => {
                      if (response.isConfirmed) {
                        Swal.fire({
                          icon: "success",
                          title: "Inhabilitado Correctamente",
                          timer: "2000",
                        });
                        button: putInhabilitarDatosConductor(user);
                      }
                    });
                  }}
                  className="btn btn-primary"
                >
                  Confirmar Rechazo y enviar motivo
                </button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ModalDatosConductor;
