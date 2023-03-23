import React, { useEffect } from 'react'
import DatosEmpresaInha from './DatosEmpresaInha'
import {useConductores} from '../../Context/Context'

function DatosClienteEmpresaInhabilitado() {
const{loadDatosClientesEmpresaInhabilitados}=useConductores()
    useEffect(()=>{
        loadDatosClientesEmpresaInhabilitados()
        
    },[])
  return (
    <>
    <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-danger shadow-primary border-radius-lg pt-4 pb-3">
                <h4 className="text-light ps-3">Clientes Inhabilitados</h4>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <DatosEmpresaInha/>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DatosClienteEmpresaInhabilitado