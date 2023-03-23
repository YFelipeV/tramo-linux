
import { useConductores } from "../../Context/Context";
function ModalDatosClienteEmpresaMotivo() {
    const {DatosClienteEmpresaId } = useConductores();
    
  return (
    <>
    <tr>
      <td>
        <div
          className="modal fade"
          id="motivo-inhabilitacion-empresa"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="mas-datosLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 " id="mas-datosLabel">
                  Motivo de Inhabilitacion{" "}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {DatosClienteEmpresaId.motivoInhabilitadoPJU}
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    </>
  )
}

export default ModalDatosClienteEmpresaMotivo