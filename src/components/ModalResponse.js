import Swal from 'sweetalert2'

export default async function ModalResponse(typeModal, errorMessage = false) {

    switch (typeModal) {
        case 'success':
            Swal.fire({
                icon: 'success',
                title: 'Proceso Exitoso!',
                text: errorMessage ? errorMessage : 'Se ha realizado con exito la operación.',
            })
            break;
        case 'error':
            Swal.fire({
                icon: 'error',
                title: 'Falló el proceso :(',
                text: errorMessage  ? errorMessage : 'Ha ocurrido un error.',
                footer: '<a href>Vuelve a Intentarlo!</a>'
            })
            break;
        default:
            console.log('Case de Tipo Modal no encontrado.');
            break;
    }

}